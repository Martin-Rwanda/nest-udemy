import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users.param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UserService {
    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService: AuthService
    ){}
    public findAll(
        getUserDto: GetUsersParamDto,
        limit: number,
        page: number
    ){
        const isAuth = this.authService.isAUth()
        return [
            {
                firstName: 'John',
                email: 'john@doe.com'
            },
            {
                firstName: 'Alice',
                email: 'alice@doe.com'
            }
        ]
    }

    public findOneById(id: string) {
        return {
            firstName: 'Alice',
            email: 'alice@doe.com'
        }
    }
}