import { Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);

    if (res.raw.affectedRows > 0) {
      return true;
    }

    return false;
  }

  async delete(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id);

    if (res.affected > 0) {
      return true;
    }

    return false;
  }

  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity);

    if (res.affected > 0) {
      return true;
    }

    return false;
  }

  async find(id: string): Promise<User> {
    const res = await this.UserRepository.findOne({ where: { id } });
    return res;
  }
}
