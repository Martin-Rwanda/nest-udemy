import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postType.enum";
import { createPostMetaOptionDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string;
    
    @IsEnum(postStatus)
    @IsNotEmpty()
    postType: postType;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:'A slug should be small letters and uses only "-", no spaces, example: my-ul'
    })
    slug: string;

    @IsEnum(postStatus)
    @IsNotEmpty()
    status: postStatus;

    @IsString()
    @IsOptional()
    content?: string;

    @IsOptional()
    @IsJSON()
    schema?: string;

    @IsOptional()
    @IsUrl()
    featuredImageUrl?: string;

    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @IsOptional()
    @IsArray()
    @IsString({ each: true})
    @MinLength(3, { each: true})
    tags?: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(()=> createPostMetaOptionDto)
    metaOPtions:createPostMetaOptionDto[]
}