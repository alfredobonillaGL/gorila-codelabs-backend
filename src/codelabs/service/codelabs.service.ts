import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Codelab } from '../interfaces/codelab.interface';
import { CodelabDto } from '../dto/codelab.dto';

@Injectable()
export class CodelabsService {

    constructor(@InjectModel('Codelabs') private readonly codelabModel: Model<Codelab>) { }

    async getCodelabs(): Promise<Codelab[]> {
        const codelabs = await this.codelabModel.find().exec();
        return codelabs;
    }

    async getCodelab(codelabId): Promise<Codelab> {
        const codelab = await this.codelabModel
            .findById(codelabId)
            .exec();
        return codelab;
    }

    async createCodelab(codelabDto: CodelabDto): Promise<Codelab> {
        const newCodelab = new this.codelabModel(codelabDto);
        return await newCodelab.save();
    }

    async editCodelab(codelabId, codelabDto: CodelabDto): Promise<Codelab> {
        const editedCodelab = await this.codelabModel
            .findByIdAndUpdate(codelabId, codelabDto, { new: true });
        return editedCodelab;
    }

    async deleteCodelab(codelabId): Promise<any> {
        const deletedCodelab = await this.codelabModel
            .findByIdAndRemove(codelabId);
        return deletedCodelab;
    }

}
