import { IsJSON, IsNotEmpty, IsString } from "class-validator";

export class createPostMetaOptionDto {
    @IsNotEmpty()
    @IsJSON()
    metaValue: string;
}                   