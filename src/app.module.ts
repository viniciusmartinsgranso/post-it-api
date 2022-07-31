import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './environment/environment';
import { AuthModule } from './modules/auth/auth.module';
import { NoteCommentModule } from './modules/note-comment/note-comment.module';
import { NoteModule } from './modules/note/note.module';
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
    AuthModule,
    NoteModule,
    NoteCommentModule,
  ],
})
export class AppModule {}
