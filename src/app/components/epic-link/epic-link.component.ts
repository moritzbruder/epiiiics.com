import {Component, Input, OnInit} from '@angular/core';
import {BaseEpicComponent} from '../base-epic-component.component';
import {LinkEpicComponent} from '../../model/epic/LinkEpicComponent';

@Component({
  selector: 'app-epic-link',
  templateUrl: './epic-link.component.html',
  styleUrls: ['./epic-link.component.css']
})
export class EpicLinkComponent extends BaseEpicComponent implements OnInit {

  @Input() component: LinkEpicComponent;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
