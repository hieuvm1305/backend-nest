import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;
  @Column({ default: true })
  is_user: boolean;

  @Column({ default: false })
  is_superuser: boolean;

  @Column()
  phone: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', nullable: true })
  logInAt: Date;
}
