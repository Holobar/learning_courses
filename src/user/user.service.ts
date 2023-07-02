import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.findByEmail(createUserDto.email);
    if (user) {
      throw new BadRequestException('Email že obstaja');
    }
    const hashed = await bcrypt.hash(createUserDto.password, 10);
    const data = { ...createUserDto, password: hashed };
    try {
      const newUser = this.userRepository.create(data);
      return this.userRepository.save(newUser);
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Napaka pri shranjevanju');
    }
  }
  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }
}
