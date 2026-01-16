import { IsNotEmpty, IsString } from "class-validator";

export class createPostMetaOptionDto {
    @IsString()
    @IsNotEmpty()
    key: string;

    @IsNotEmpty()
    value: any
}