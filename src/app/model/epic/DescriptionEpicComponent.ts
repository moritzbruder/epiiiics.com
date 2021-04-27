import {EpicComponent} from './Epic';

export class DescriptionEpicComponent extends EpicComponent {

  static typeName = 'description';
  data: EpicDescription;

}

export class EpicDescription {

  markdown: string;
  title: string;

}
