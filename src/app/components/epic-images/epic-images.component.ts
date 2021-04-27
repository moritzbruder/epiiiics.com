import {Component, Input, OnInit} from '@angular/core';
import {BaseEpicComponent} from '../base-epic-component.component';
import {EpicImagesImage, ImagesEpicComponent} from '../../model/epic/ImagesEpicComponent';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-epic-images',
  templateUrl: './epic-images.component.html',
  styleUrls: ['./epic-images.component.scss']
})
export class EpicImagesComponent extends BaseEpicComponent implements OnInit {

  @Input() component: ImagesEpicComponent;

  constructor(private storage: AngularFireStorage) {
    super();
  }

  ngOnInit(): void {
  }

  addImage(event: any): void {
    const id = getUniqueId(5);
    if (event.target.files && event.target.files[0]) {
      const ref = this.storage.ref('epics/' + id);
      const upload = ref.put(event.target.files[0]);
      upload.then(it => {
        ref.getDownloadURL().subscribe(url => {
          if (!this.component.data.images) {
            this.component.data.images = [];
          }
          this.component.data.images.push(new EpicImagesImage(url));
        });
      });
    }
  }

  removeImage(idx: number): void {
    this.component.data.images.splice(idx, 1);
  }

}

export function getUniqueId(parts: number): string {
  const stringArr = [];
  for (let i = 0; i < parts; i++){
    // tslint:disable-next-line:no-bitwise
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return stringArr.join('-');
}
