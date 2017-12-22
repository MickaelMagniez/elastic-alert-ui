import {Match} from './match';

export class Email {
  public recipient: string;
}

export class Target {
  public emails: Email[];
}
export class Alert {
  public id: string;
  public name: string;
  public match: Match;
  public delay: number;
  public targets: Target;
  // constructor(public id: string = null,
  //             public name: string = null) {
  // }
}


