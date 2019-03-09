import { Document } from 'mongoose';

export interface Step extends Document {
    readonly title: string;
    readonly stepNumber: number;
    readonly body: string;
}
