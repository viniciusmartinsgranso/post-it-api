import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './environment/environment';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
      logging: environment.DATABASE_LOGGING === 'true',
    }),
    UserModule,
  ],
})
export class AppModule {}
