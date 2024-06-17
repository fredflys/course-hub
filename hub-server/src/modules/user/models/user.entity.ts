import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    default: '',
    comment: 'nickname',
  })
  @IsNotEmpty()
  name: string;

  @Column({
    default: 'user description',
  })
  desc: string;

  @Column({
    default: '',
  })
  phone: string;

  @Column({
    nullable: true,
  })
  avatar: string;

  @Column({
    nullable: true,
  })
  password: string;
}

export { User };
