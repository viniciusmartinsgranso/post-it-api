import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { ProtectTo } from "../../../decorators/protect/protect.decorator";
import { User } from "../../../decorators/user/user.decorator";
import { UserEntity } from "../../user/entities/user.entity";
import { CreateNotePayload } from "../models/create-note.payload";
import { NoteProxy } from "../models/note.proxy";
import { UpdateNotePayload } from "../models/update-note.payload";
import { NoteService } from '../services/note.service';

@Controller('note')
@ApiTags('note')
export class NoteController {

  constructor(
    private readonly noteService: NoteService
  )
  {}

  @ProtectTo()
  @Get('me')
  @ApiOperation({ summary: 'Obtém as notas criadas pelo usuário logado' })
  @ApiOkResponse({ type: NoteProxy, isArray: true })
  public getMe(@User() requestUser: UserEntity): Promise<NoteProxy[]> {
    return this.noteService.getMe(requestUser).then(result => result.map(entity => new NoteProxy(entity)));
  }

  @ProtectTo()
  @Get('feed/:userId')
  @ApiOperation({ summary: 'Obtém as notas criadas pelo usuário logado' })
  @ApiOkResponse({ type: NoteProxy, isArray: true })
  public getByUser(@Param('userId') userId: string): Promise<NoteProxy[]> {
    return this.noteService.getPublicByUser(+userId).then(result => result.map(entity => new NoteProxy(entity)));
  }


  @ProtectTo()
  @Get('feed')
  @ApiOperation({ summary: 'Obtém as notas públicas' })
  @ApiOkResponse({ type: NoteProxy, isArray: true })
  public getPublic(): Promise<NoteProxy[]> {
    return this.noteService.getPublic().then(result => result.map(entity => new NoteProxy(entity)));
  }

  @ProtectTo()
  @Get(':noteId')
  @ApiOperation({ summary: 'Obtém uma nota' })
  @ApiOkResponse({ type: NoteProxy })
  public getOne(@User() requestUser: UserEntity, @Param() noteId: string): Promise<NoteProxy> {
    return this.noteService.getOne(requestUser, +noteId).then(entity => new NoteProxy(entity));
  }

  @ProtectTo()
  @Post()
  @ApiOperation({ summary: 'Cria uma nota' })
  @ApiBody({ type: CreateNotePayload })
  @ApiOkResponse({ type: NoteProxy })
  public createOne(@User() requestUser: UserEntity, @Body() payload: CreateNotePayload): Promise<NoteProxy> {
    return this.noteService.createOne(requestUser, payload).then(entity => new NoteProxy(entity));
  }

  @ProtectTo()
  @Put(':noteId')
  @ApiOperation({ summary: 'Atualiza uma nota' })
  @ApiBody({ type: UpdateNotePayload })
  @ApiOkResponse({ type: NoteProxy })
  public updateOne(@User() requestUser: UserEntity, @Param('noteId') noteId: string, @Body() payload: UpdateNotePayload): Promise<NoteProxy> {
    return this.noteService.updateOne(requestUser, +noteId ,payload).then(entity => new NoteProxy(entity));
  }

  @ProtectTo()
  @Delete(':noteId')
  @ApiOperation({ summary: 'Deleta uma nota' })
  @ApiOkResponse()
  public deleteUser(@User() requestUser: UserEntity, @Param('noteId') noteId: string): void {
    this.noteService.deleteOne(requestUser, +noteId);
  }
}
