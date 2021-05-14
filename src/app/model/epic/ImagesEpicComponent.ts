import {EpicComponent} from './Epic';

/**
 * A component of an Epic that shows a number of images.
 */
export class ImagesEpicComponent extends EpicComponent {

  static typeName = 'images';
  data: EpicImages;

}

/**
 * Component Data for ImagesEpicComponent, consists of a section title and a list of EpicImagesImage(s).
 */
export class EpicImages {

  images: EpicImagesImage[] = [];
  title: string;

}

/**
 * Represents a single image to be displayed in a ImagesEpicComponent.
 */
export class EpicImagesImage {

  /**
   * Url to download the image from
   */
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}
