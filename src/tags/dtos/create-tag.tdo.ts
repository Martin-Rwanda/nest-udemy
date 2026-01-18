import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength } from "class-validator";

export class CreateTagDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(256)
    name:string;

    @ApiProperty({
            example: "my-blog-post"
        })
        @IsString()
        @IsNotEmpty()
        @MaxLength(256)
        @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message:'A slug should be small letters and uses only "-", no spaces, example: my-ul'
        })
    slug: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsJSON()
    schema?: string;

     @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    featuredImageUrl?: string
}