// src/dtos/user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;
}
