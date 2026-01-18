import { Injectable } from '@nestjs/common';
import { createPostMetaOptionDto } from '../dtos/create-post-meta-options.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-options.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
    constructor(
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>
    ){}
    async createMetaOptions(createMetaOptions: createPostMetaOptionDto){
        let newMetaOption = this.metaOptionRepository.create(createMetaOptions)
        newMetaOption = await this.metaOptionRepository.save(newMetaOption)

        return newMetaOption;
    }
}
