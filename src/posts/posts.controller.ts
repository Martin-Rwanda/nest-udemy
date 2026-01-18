import { Body, Controller, Delete, Get,Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ){}

    @Get('{/:userId}')
    public getPosts(@Param('userId') userId: number){
        return this.postsService.findAll(userId)
    }

    @ApiOperation({
        summary: "Create a new blog post"
    })
    @ApiResponse({
        status: 201,
        description: "You get a 201 response if your post is created successfully"
    })
    @Post()
    createPost(@Body() createPostDto: CreatePostDto){
        return this.postsService.createPost(createPostDto)
    }

    @ApiOperation({
        summary: "Update a blog post"
    })
    @ApiResponse({
        status: 200,
        description: "You get a 200 response if your post is updated successfully"
    })
    @Patch()
    updatePost(@Body() updatePostDto: UpdatePostDto) {
        console.log(updatePostDto);
    }

    @Delete()
    deletePost(@Query('id', ParseIntPipe) id: number) {
        return this.postsService.delete(id)
    }
}