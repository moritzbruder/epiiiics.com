import {EpicComponent} from '../Epic';

/**
 * An epic component that shows goals, specifically okr goals.
 */
export class OkrGoalsEpicComponent extends EpicComponent {

  static typeName = 'epic-goals';
  static subtypeName = 'okrs';

  data: OkrGoals;

}

/**
 * Component data for OkrGoalsEpicComponent, has an objective and a number of key results.
 */
export class OkrGoals {

  objective: OkrGoalsItem;
  keyResults: OkrGoalsItem[];

}

/**
 * A line shown as part of okr goals, could be an objective or key result.
 */
export class OkrGoalsItem {

  /**
   * Description of the line, shown in the app.
   */
  text: string;

  /**
   * Determines whether this line is highlighted or not (allows users to focus on specific key results).
   */
  highlighted: boolean;

  constructor(highlighted: boolean) {
    this.highlighted = highlighted;
  }
}
