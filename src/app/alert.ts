import {Match} from './match';

export class Email {
  public recipient: string;
}

export class Target {
  public emails: Email[];
}
export class Elastic {
  public url: string;
  public index: string;
  public type: string;
}
export class Alert {
  public id: string;
  public name: string;
  public elastic: Elastic;
  public query: string;
  public match: Match;
  public delay: number;
  public targets: Target;
  // constructor(public id: string = null,
  //             public name: string = null) {
  // }
}


