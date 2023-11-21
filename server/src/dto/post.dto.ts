// src/dtos/user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly content: string;

  @ApiProperty()
  readonly imageUrl: string;

  @ApiProperty()
  readonly location?: string;

  @ApiProperty()
  readonly user: {
    id: string;
    fullName: string;
    imageUrl: string;
  };
}
