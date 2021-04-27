import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseEpicComponent} from '../base-epic-component.component';

@Component({
  selector: 'app-structure-guide',
  templateUrl: './structure-guide.component.html',
  styleUrls: ['./structure-guide.component.scss']
})
export class StructureGuideComponent implements OnInit {

  @Input() iconName: string;
  @Input() epicComponent: BaseEpicComponent;
  @Input() hideLine = false;
  @Input() editMode: boolean;
  @Input() removable = true;

  @Input() canMoveUp = true;
  @Input() canMoveDown = true;

  @Output() deleteClicked = new EventEmitter();
  @Output() moveClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
