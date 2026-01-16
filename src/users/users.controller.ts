import { Body, Controller, Get, Param, Post, Query, Headers, Ip, ParseIntPipe, DefaultValuePipe, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users.param.dto';
import { UpdateUserDto } from './dtos/update.users.dto';
import { UserService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor (
        private readonly userService: UserService
    ){}
    @Get('/:id')
    @ApiOperation({
        summary: 'Fetch list of Users'
    })
    @ApiResponse({
        status: 200,
        description: 'Users Fetched successfully'
    })
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description:'Number of entries returned per query',
        example: 10
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description:'The position of page number you want API to return',
        example: 1
    })
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
