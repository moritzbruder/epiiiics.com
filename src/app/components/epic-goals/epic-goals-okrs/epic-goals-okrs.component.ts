import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {BaseEpicComponent} from '../../base-epic-component.component';
import {OkrGoalsEpicComponent, OkrGoalsItem} from '../../../model/epic/goals/OkrGoalsEpicComponent';

@Component({
  selector: 'app-epic-goals-okrs',
  templateUrl: './epic-goals-okrs.component.html',
  styleUrls: ['./epic-goals-okrs.component.css']
})
export class EpicGoalsOkrsComponent extends BaseEpicComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('objectiveInput', {read: ElementRef, static: false}) objectiveInput: ElementRef;
  @ViewChildren('keyResultInput', {read: ElementRef}) keyResultInputs: QueryList<ElementRef>;

  @Input() component: OkrGoalsEpicComponent;
  canAddKeyResult = true;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.reevalCanAddKeyResult();
  }

  ngAfterViewInit(): void {
    this.sizeFields();
  }

  private sizeFields(): void {
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.resizeField(this.objectiveInput.nativeElement);
      for (const krInput of this.keyResultInputs) {
        this.resizeField(krInput.nativeElement);
      }
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sizeFields();
  }

  toggleHighlightWhileEditing(item: OkrGoalsItem): void {
    if (this.editMode) {
      item.highlighted = !item.highlighted;
    }
  }

  addKeyResult(): void {
    this.reevalCanAddKeyResult();
    if (!this.canAddKeyResult) {
      return;
    }
    this.component.data.keyResults.push(new OkrGoalsItem(true));
    this.reevalCanAddKeyResult();
  }

  reevalCanAddKeyResult(): void {
    const item = this.component.data.keyResults[this.component.data.keyResults.length - 1];
    this.canAddKeyResult = !item || (item.text && item.text.length !== 0);
  }

  removeKeyResult(pos: number): void {
    if (!this.editMode) {
      return;
    }
    this.component.data.keyResults.splice(pos, 1);
    this.reevalCanAddKeyResult();
  }

  public resizeField(field: any): void {
    field.style.height = '';
    field.style.height = field.scrollHeight + 'px';
  }

  trackKrsBy(index, item): string {
    return item ? 'item-' + index : undefined;
  }

}
