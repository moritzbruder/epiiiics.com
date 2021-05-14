/**
 * Epic = one page created by a user (has it's own unique id that's part of the url).
 */
export class Epic {

  /**
   * Title shown at the top of the page.
   */
  title: string;

  /**
   * Id of the firebase user who created this epic.
   */
  creatorId: string;

  /**
   * Link to external tracking tool like jira or linear, shown below the title as a link.
   */
  issueTrackerLink: string;

  /**
   * Simple description shown underneath the epic's title.
   */
  description: string;

  /**
   * Components that make up the body of the page.
   */
  components: EpicComponent[] = [];

  /**
   * Creates an empty epic.
   * @param creatorId Id of the firebase user who is creating this epic. Only this user can edit the epic in the future.
   */
  constructor(creatorId: string) {
    this.creatorId = creatorId;
  }

}

/**
 * Base structure of a component that makes up the epic's body.
 */
export class EpicComponent {

  /**
   * string-based type identifier that determines the view component used to display this component.
   */
  type: string;

  /**
   * Data specific to the component type.
   */
  data: object;

}
