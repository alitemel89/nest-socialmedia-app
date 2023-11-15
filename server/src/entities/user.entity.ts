import { ApiProperty } from '@nestjs/swagger';
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  @ApiProperty()
  fullName: string;

  @Column()
  @ApiProperty()
  emailAddress: string;

  @Column()
  @ApiProperty()
  imageUrl: string;
}
