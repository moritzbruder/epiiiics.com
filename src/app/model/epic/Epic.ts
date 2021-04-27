export class Epic {

  title: string;
  creatorId: string;
  issueTrackerLink: string;
  description: string;
  components: EpicComponent[] = [];

  constructor(creatorId: string) {
    this.creatorId = creatorId;
  }

}

export class EpicComponent {

  type: string;
  data: object;

}
