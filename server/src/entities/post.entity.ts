// entities/post.entity.ts
import { User } from 'src/entities/user.entity';
import { Entity, ObjectIdColumn, Column, ManyToOne, JoinColumn, ObjectId } from 'typeorm';

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

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
