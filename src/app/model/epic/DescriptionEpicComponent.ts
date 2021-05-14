import {EpicComponent} from './Epic';

/**
 * A component that displays rich text and can be edited using markdown.
 */
export class DescriptionEpicComponent extends EpicComponent {

  static typeName = 'description';
  data: EpicDescription;

}

/**
 * Component Data for DescriptionEpicComponent, consist of section title and the markdown text to show.
 */
export class EpicDescription {

  markdown: string;
  title: string;

}
