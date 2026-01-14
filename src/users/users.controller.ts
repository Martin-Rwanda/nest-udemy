import { Body, Controller, Get, Param, Post, Query, Headers, Ip, ParseIntPipe, DefaultValuePipe, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users.param.dto';
import { UpdateUserDto } from './dtos/update.users.dto';
import { UserService } from './providers/users.service';

@Controller('users')
export class UsersController {
    constructor (
        private readonly userService: UserService
    ){}
    @Get('{/:id}')
    public getUsers(
        @Param() getUserParamDto: GetUsersParamDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page',  new DefaultValuePipe(1), ParseIntPipe) page: number
    ) {
        return this.userService.findAll(getUserParamDto, limit, page)
    }
    @Post()
    public createUser(
        @Body() createUserDto:CreateUserDto, 
    ) {
        console.log(createUserDto)
        return 'You created user'
    }

    @Patch()
    public updateUser(@Body() updateUser: UpdateUserDto){
        return updateUser;
    }
}
