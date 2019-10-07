import { Controller, Get, UseGuards, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @Get('google')// when we go http://localhost:3000/auth/google in our browser the login flow will start
    @UseGuards(AuthGuard('google'))//We protected this route using the @UseGuards decorator in combination with the AuthGuard from @nestjs/passport
    googleLogin()
    {
        // initiates the Google OAuth2 login flow
    }

    @Get('google/callback')//after the user has logged in, google will send the user information to this endpoint (we provided this URI to google when we registered our application!)
    @UseGuards(AuthGuard('google')) 
    googleLoginCallback(@Req() req, @Res() res)
    {
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        if (jwt)
            res.redirect('http://localhost:4200/login/succes/' + jwt);
        else 
            res.redirect('http://localhost:4200/login/failure');
    }

}