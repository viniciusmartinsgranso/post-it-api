import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { environment } from 'src/environment/environment';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: environment.JWT_KEY,
    }),
  ],
  exports: [PassportModule, JwtModule],
})
export class AuthTokenModule {}
