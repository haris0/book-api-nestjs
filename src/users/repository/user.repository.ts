import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entiry';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
