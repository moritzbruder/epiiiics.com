import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseEpicComponent} from '../base-epic-component.component';

@Component({
  selector: 'app-epic-title',
  templateUrl: './epic-title.component.html',
  styleUrls: ['./epic-title.component.css']
})
export class EpicTitleComponent extends BaseEpicComponent implements OnChanges {

  @ViewChild('titleInput', {read: ElementRef, static: false}) titleInput: ElementRef;
  @ViewChild('descriptionField', {read: ElementRef, static: false}) descriptionField: ElementRef;

  private issueTrackerNames = {
    'linear.app': 'Linear',
    'atlassian.net': 'Jira'
  };

  constructor() {
    super();
  }

  getTicketAppName(): string {
    if (!this.epic.issueTrackerLink) {
      return null;
    }
    for (const domain in this.issueTrackerNames) {
      if (this.epic.issueTrackerLink.includes(domain)) {
        return this.issueTrackerNames[domain];
      }
    }
    return 'Issue Tracker';
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => { // this will make the execution after the above boolean has changed
      if (changes.editMode) {
        this.focusOnTitleInputIfNeeded();
      }
      if (this.descriptionField) {
        this.resizeField(this.descriptionField.nativeElement);
      }
    }, 0);
  }

  focusOnTitleInputIfNeeded(): void {
    if (this.editMode && this.titleInput && (!this.epic.title || this.epic.title.length < 1)) {
      this.titleInput.nativeElement.focus();
    }
  }

  public resizeField(field: any): void {
    field.style.height = '';
    field.style.height = field.scrollHeight + 'px';
  }

}
