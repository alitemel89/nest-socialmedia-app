import { ApiProperty } from '@nestjs/swagger';
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  @ApiProperty()
  username: string;

  @Column()
  @ApiProperty()
  email: string;
}
