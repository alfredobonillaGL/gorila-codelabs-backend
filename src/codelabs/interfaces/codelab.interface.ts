import { Document } from 'mongoose';
import { Step } from './step.interface';

export interface Codelab extends Document {
    readonly title: string;
    readonly author: string;
    readonly categories: string[];
    readonly duration: number;
    readonly level: string;
    readonly date_posted: string;
    readonly practice: string;
    readonly steps: Step[];
}
