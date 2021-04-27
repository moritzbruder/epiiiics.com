import {
  AfterContentInit,
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter, HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {BaseEpicComponent} from '../base-epic-component.component';
import {DescriptionEpicComponent} from '../../model/epic/DescriptionEpicComponent';
import {MarkdownService} from 'ngx-markdown';
import {SimplemdeOptions} from 'ngx-simplemde/src/config';
import compile = WebAssembly.compile;
import {SimplemdeComponent} from 'ngx-simplemde';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-epic-description',
  templateUrl: './epic-description.component.html',
  styleUrls: ['./epic-description.component.css']
})
export class EpicDescriptionComponent extends BaseEpicComponent {

  options = {
    toolbar: ['bold', 'italic', 'strikethrough', 'heading-1', 'heading-2', 'heading-3', '|', 'quote', 'code', 'unordered-list', 'ordered-list', 'link', '|', 'fullscreen'],
    toolbarTips: true,
    status: false
  };
  @Input() component: DescriptionEpicComponent;

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }
}
