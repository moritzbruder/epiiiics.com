import {Component, HostBinding, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {OverlayContainer} from '@angular/cdk/overlay';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {Epic, EpicComponent} from './model/epic/Epic';
import {ActivatedRoute, Router} from '@angular/router';
import {OkrGoalsItem} from './model/epic/goals/OkrGoalsEpicComponent';
import {AngularFireAuth} from '@angular/fire/auth';
import {Title} from '@angular/platform-browser';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  editMode = false;
  canEdit = false;

  epicItem: Epic;
  epicId: string;

  analyticsConsent = localStorage['epics/analytics-consent'];
  firstVisit: boolean;

  componentTypes = [
    new ComponentTypeOption('description', 'Text', 'Add markdown text to describe Scenarios or Acceptance Criteria', 'ic_text'),
    new ComponentTypeOption('link', 'Link', 'Add a link to external resources', 'ic_internet'),
    new ComponentTypeOption('goal', 'Goals', 'Add OKR goals to set the context for this epic', 'ic_goal'),
    new ComponentTypeOption('images', 'Designs', 'Add pictures to share mockups or designs.', 'ic_design')
  ];

  constructor(private titleService: Title, private firestore: AngularFirestore, private overlay: OverlayContainer, private route: ActivatedRoute, private router: Router, private auth: AngularFireAuth, private analytics: AngularFireAnalytics) {
    analytics.setAnalyticsCollectionEnabled(this.analyticsConsent === 'true');
    this.firstVisit = localStorage['epics/visited-before'] == null;
    console.log('firstVisit: ' + this.firstVisit);
    localStorage['epics/visited-before'] = true;
    auth.signInAnonymously().then(() => {
      auth.user.subscribe(user => {
        this.epicId = route.snapshot.paramMap.get('epicId');
        const collection = firestore.collection<Epic>('epics');
        if (!this.epicId) {
          // Let's create a new epic
          collection.add(JSON.parse(JSON.stringify(new Epic(user.uid)))).then((res) => {
            this.router.navigate(['/' + res.id], { queryParams: { edit: 1 } });
          });
        } else {
          firestore.doc('epics/' + this.epicId).valueChanges().pipe(map(epic => epic as Epic)).subscribe(it => {
            if (!it) {
              this.router.navigate(['404'], { queryParams: {  }, queryParamsHandling: 'merge'});
            }
            this.epicItem = it;
            this.updateTitle();
            if (user.uid === this.epicItem.creatorId) {
              this.canEdit = route.snapshot.queryParamMap.get('preview') !== '1';
              this.editMode = route.snapshot.queryParamMap.get('edit') === '1';
            }
            this.router.navigate([], { relativeTo: this.route, queryParams: { edit: null }, queryParamsHandling: 'merge'});
          });
        }
      });
    });
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark-theme';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  toggleEditMode(): void {
    if (this.editMode) {
      this.sendUpdates();
    }
    this.editMode = !this.editMode;
  }

  updateTitle(): void {
    const hasTitle = this.epicItem?.title && this.epicItem.title.length > 0;
    this.titleService.setTitle((hasTitle ? this.epicItem.title + ' - ' : '') + 'epiiics.com');
  }

  sendUpdates(): void {
    const epicId = this.route.snapshot.paramMap.get('epicId');
    const obj = JSON.parse(JSON.stringify(this.epicItem));
    this.firestore.doc('epics/' + epicId).set(obj);
    this.updateTitle();
  }

  json(obj): string {
    return JSON.stringify(obj);
  }

  deleteComponentAt(idx: number): void {
    this.epicItem.components.splice(idx, 1);
  }

  moveComponentAt(idx: number, dir: number): void {
    const item = this.epicItem.components[idx];
    const replacee = this.epicItem.components[idx + dir];
    this.epicItem.components[idx] = replacee;
    this.epicItem.components[idx + dir] = item;
  }

  randomString(length, chars): string {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }


  addComponent(type: string): void {
    const empty = this.getEmptyComponent(type);
    this.epicItem.components.push(empty);
  }

  trackComponentsBy(index, item): string {
    return item ? item.type : undefined;
  }

  cookieConsent(consent: boolean): void {
    this.analytics.setAnalyticsCollectionEnabled(consent).then(() => {
      console.log('analytics accepted: ' + consent);
    });
    localStorage['epics/analytics-consent'] = consent;
    this.analyticsConsent = consent ? 'true' : 'false';
  }

  copyEpicAddress(element: any): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'https://epiiics.com/' + this.epicId;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    element.classList.add('copied');
    setTimeout(it => {
      element.classList.remove('copied');
    }, 600);
  }


  private getEmptyComponent(type: string): EpicComponent {
    switch (type) {
      case 'description': {
        return {
          type,
          data: {
            title: 'Description'
          }
        };
      }
      case 'link': {
        return {
          type,
          data: {
            title: 'Link'
          }
        };
      }
      case 'goal': {
        return {
          type,
          data: {
            subtype: 'okrs',
            objective: new OkrGoalsItem(true),
            keyResults: [
              new OkrGoalsItem(true)
            ]
          }
        };
      }
      case 'images': {
        return {
          type,
          data: {
            title: 'Mock-Ups'
          }
        };
      }
    }
  }

}

export class ComponentTypeOption {

  identifier: string;
  title: string;
  description: string;
  iconName: string;

  constructor(identifier: string, title: string, description: string, iconName: string) {
    this.identifier = identifier;
    this.title = title;
    this.description = description;
    this.iconName = iconName;
  }

}
