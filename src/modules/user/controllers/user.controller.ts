import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateUserPayload } from "../models/create-user.payload";
import { UpdateUserPayload } from '../models/update-user.payload';
import { UserProxy } from '../models/user.proxy';
import { UserService } from '../services/user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/list')
  @ApiOperation({ summary: 'Obtem os dados de todos os usuários' })
  @ApiOkResponse({ type: UserProxy, isArray: true })
  public getUsers(): UserProxy[] {
    return this.userService.getUsers();
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Obtem um usuário pela identificação' })
  @ApiOkResponse({ type: UserProxy })
  @ApiParam({ name: 'userId', description: 'A listagem de um usuário' })
  public getUserById(@Param('userId') userId: string): UserProxy {
    return this.userService.getUserById(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastra um usuário' })
  @ApiOkResponse({ type: CreateUserPayload })
  @ApiBody({
    type: CreateUserPayload,
    description: 'Os dados a serem cadastrados do usuário',
  })
  public postUser(@Body() user: CreateUserPayload): CreateUserPayload {
    return this.userService.postUser(user);
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Atualiza um usuário' })
  @ApiOkResponse({ type: UserProxy })
  @ApiParam({ name: 'userId', description: 'A identificação do usuário' })
  @ApiBody({
    type: UpdateUserPayload,
    description: 'Os dados a serem atualizados do usuário',
  })
  public putUser(@Param('userId') userId: string, @Body() user: UpdateUserPayload): UserProxy {
    return this.userService.putUser(userId, user);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Deleta um usuário' })
  @ApiOkResponse({ type: UserProxy })
  @ApiParam({ name: 'userId', description: 'A identificação do usuário' })
  public deleteUser(@Param('userId') userId: string): void {
    return this.userService.deleteUser(userId);
  }
}
