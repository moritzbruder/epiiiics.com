import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Epic} from '../model/epic/Epic';
import {StructureGuideComponent} from './structure-guide/structure-guide.component';

@Component({
  // create seletor base for test override property
  selector: 'app-base-epic-component',
  template: ''
})
export class BaseEpicComponent {

  @Input() epic: Epic;
  @Input() isLastItem: boolean;
  @Input() isFirstItem: boolean;
  @Input() editMode: boolean;

  @Output() deleteClicked = new EventEmitter();
  @Output() moveClicked = new EventEmitter<number>();

}
