import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UserService))
        private readonly userServices: UserService
    ){}

    public login(email:string, password: string, id:string){
        const user = this.userServices.findOneById('1234');
        return 'SAMPLE_TOKEN'
    }

    public isAUth() {
        return true
    }
}
