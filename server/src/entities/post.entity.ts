import { User } from 'src/entities/user.entity';
import { Entity, ObjectIdColumn, ObjectId, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  imageUrl: string;

  @Column()
  location?: string;

  @Column()
  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
