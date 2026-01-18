import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users.param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UserService {
    /**
     * Auth user to check who is authorized
     */
    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService: AuthService,

        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ){}


    async createUser(createUserDto: CreateUserDto){
        const existingUser = await this.usersRepository.findOne({
            where: { email: createUserDto.email}
        })
        let newUser = this.usersRepository.create(createUserDto)
        newUser = await this.usersRepository.save(newUser);

        return newUser
    }
    /**
     * The method to get all the users from the database
     */
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

    /**
     * Finding a single user using the ID of the user
     */
    public async findOneById(id: number) {
        return await this.usersRepository.findOneBy({id})
    }
}