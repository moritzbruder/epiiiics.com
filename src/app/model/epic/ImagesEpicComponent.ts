import {EpicComponent} from './Epic';

export class ImagesEpicComponent extends EpicComponent {

  static typeName = 'images';
  data: EpicImages;

}

export class EpicImages {

  images: EpicImagesImage[] = [];
  title: string;

}

export class EpicImagesImage {

  url: string;

  constructor(url: string) {
    this.url = url;
  }
}
