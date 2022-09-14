import { updateUserNameCommand } from '../command/updateUserNameCommand';
import { User } from '../entity/user.entity';
import { UserRepository } from '../userRepository.interface';
import { UpdateUserNameUseCase } from './interface/updateUserName';

export class UpdateUserNameImplementation implements UpdateUserNameUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute(command: updateUserNameCommand): Promise<User> {
    const accessToken = this.userRepository.getAccessToken();
    return this.userRepository.updateUserName(accessToken, command.name);
  }
}
