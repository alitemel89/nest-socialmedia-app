// src/dtos/user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly content: string;

  @ApiProperty()
  readonly location?: string;

  @ApiProperty()
  readonly user: {
    fullName: string;
    imageUrl: string;
  };
}
