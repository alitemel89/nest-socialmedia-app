// src/dtos/user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly fullName: string;

  @ApiProperty()
  readonly emailAddress: string;

  @ApiProperty()
  readonly imageUrl: string;
}
