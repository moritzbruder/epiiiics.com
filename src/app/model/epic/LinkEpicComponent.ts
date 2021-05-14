import {EpicComponent} from './Epic';

/**
 * A component of an epic that displays a simple weblink.
 */
export class LinkEpicComponent extends EpicComponent {

  static typeName = 'link';
  data: EpicLink;

}

/**
 * Component data for LinkEpicComponent. Consists of section title and the actual weblink url.
 */
export class EpicLink {

  url: string;
  title: string;

}
