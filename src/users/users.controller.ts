import { Body, Controller, Get, Param, Post, Query, Headers, Ip, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('{/:id}')
    public getUsers(
        @Param('id', ParseIntPipe) id: number | undefined,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page',  new DefaultValuePipe(1), ParseIntPipe) page: number
    ) {
        console.log(typeof id)
        console.log(id)
        return 'You get users'
    }
    @Post()
    public createUser(@Body() request:any, @Headers() header: any, @Ip() ip:any) {
        console.log(request)
        console.log(header)
        console.log(ip)
        return 'You created user'
    }
}
