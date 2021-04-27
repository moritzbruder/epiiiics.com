import {EpicComponent} from '../Epic';

export class OkrGoalsEpicComponent extends EpicComponent {

  static typeName = 'epic-goals';
  static subtypeName = 'okrs';

  data: OkrGoals;

}

export class OkrGoals {

  subtype: string;
  objective: OkrGoalsItem;
  keyResults: OkrGoalsItem[];

}

export class OkrGoalsItem {

  text: string;
  highlighted: boolean;

  constructor(highlighted: boolean) {
    this.highlighted = highlighted;
  }
}
