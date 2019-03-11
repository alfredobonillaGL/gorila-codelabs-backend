import { Step } from '../interfaces/step.interface';

export interface CodelabDto  {
  readonly title: string;
  readonly author: string;
  readonly categories: string[];
  readonly duration: number;
  readonly level: string;
  readonly date_posted: string;
  readonly practice: string;
  readonly steps: Step[];
  readonly description: string;
}
