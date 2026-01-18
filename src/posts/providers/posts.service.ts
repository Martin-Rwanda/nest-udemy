import { Injectable, NotFoundException } from '@nestjs/common';
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
        private readonly postRepository: Repository<Post>,
    ){}
    async findAll(userId: number){
        const user = this.usersService.findOneById(userId)
        let posts = await this.postRepository.find({
            relations: {
                metaOptions: true,
                author: true
            }
        })

        return posts
    }

    async createPost(createPostDto: CreatePostDto) {
        let author = await this.usersService.findOneById(createPostDto.authorId)

        if (!author) {
            throw new NotFoundException('Author not found');
        }
        
        return this.postRepository.save(
            this.postRepository.create({
                ...createPostDto,
                author
            })
        );
    }

    async delete(id: number) {
        await this.postRepository.delete(id);

        return { deleted: true, id };
    }
}