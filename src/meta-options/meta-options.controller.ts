import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './providers/meta-options.service';
import { createPostMetaOptionDto } from './dtos/create-post-meta-options.dto';

@Controller('meta-options')
export class MetaOptionsController {
    constructor(
        private readonly metaOptionService: MetaOptionsService
    ){}
    @Post()
    createMetaOption(@Body() createPostMetaOptions: createPostMetaOptionDto){
        return this.metaOptionService.createMetaOptions(createPostMetaOptions);
    }
}
