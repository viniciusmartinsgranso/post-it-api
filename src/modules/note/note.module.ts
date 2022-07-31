import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthTokenModule } from '../auth/auth-token.module';
import { NoteEntity } from './entities/note.entity';
import { NoteService } from './services/note.service';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity]), AuthTokenModule],
  providers: [NoteService],
  exports: [NoteService],
})
export class NoteModule {}
