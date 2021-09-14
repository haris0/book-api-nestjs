import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (payload: CreateUserDto): Promise<void> => {
    const { name, email, password } = payload;

    console.log(name, email, password);

    const user = this.create();
    user.name = name;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code == '23505') {
        throw new ConflictException(`Email ${email} already used`);
      } else {
        throw new InternalServerErrorException(error);
      }
    }
  };
}
