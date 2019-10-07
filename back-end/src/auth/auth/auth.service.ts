import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { sign } from 'jsonwebtoken';

export enum Provider
{
    GOOGLE = 'google'
}

@Injectable()
export class AuthService {
    
    private readonly JWT_SECRET_KEY = 'uO8f6yv6k4bVuDR+N/64yvzbRSlLiQT0ahb52NiyfY+87OrCoewZvYNwwEhJdvrLdlWEK4JSBb+00YsLb9jolJ7qCTs05/86Lt1OIO9neYqfx3z7Ql8EGbX0gWTG0HDIIoippYsGhzo9wBw9SZudDyCiSYvsRRQbcXW6w4nJmjDcjG0SYVvWWrgRDQAYFohTEexW9Hj4bTVy4qS2xe7+yrPDYm5IeCp/nqm0RfGiSVQEopzD9CvgPX4hRqYfZaFRcU4/ituiJLPg4i/J5zTzBluxTilUHSm3fnYTgQx2DPBflbs61OyrMPd1RumsMQWbKTDPB0jjX34CbaEt6W516A=='; 

    constructor(/*private readonly usersService: UsersService*/) {
    };

    async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string>
    {
        try 
        {
            // You can add some registration logic here, 
            // to register the user using their thirdPartyId (in this case their googleId)
            // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);
            
            // if (!user)
                // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);
                
            const payload = {
                thirdPartyId,
                provider
            }

            const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
            return jwt;
        }
        catch (err)
        {
            throw new InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }

}