import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(
        private readonly usersService: UserService,
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ){}
    public findAll(userId: string){
        const user = this.usersService.findOneById(userId)
        return [
            {
                user: user,
                title: 'Test titlle',
                content: 'Test Content'
            },
            {
                user: user,
                title: 'Test titlle 2',
                content: 'Test Content 2'
            }
        ]
    }

    async createPost(createPostDto: CreatePostDto){
        let newPost = this.postRepository.create(createPostDto);
        newPost = await this.postRepository.save(newPost);

        return newPost
    }
}