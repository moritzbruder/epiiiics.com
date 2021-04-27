import {EpicComponent} from './Epic';

export class LinkEpicComponent extends EpicComponent {

  static typeName = 'link';
  data: EpicLink;

}

export class EpicLink {

  url: string;
  title: string;

}
