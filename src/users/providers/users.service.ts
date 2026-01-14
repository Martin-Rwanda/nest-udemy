import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users.param.dto';

@Injectable()
export class UserService {
    public findAll(
        getUserDto: GetUsersParamDto,
        limit: number,
        page: number
    ){
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

    public findOneById(id: number) {
        return {
            firstName: 'Alice',
            email: 'alice@doe.com'
        }
    }
}