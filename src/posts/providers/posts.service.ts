import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
    constructor(
        private readonly usersService: UserService
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
}