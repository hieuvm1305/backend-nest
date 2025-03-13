import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(name: string, email: string) {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  async getAllUsers() {
    return this.userRepository.find();
  }
}
