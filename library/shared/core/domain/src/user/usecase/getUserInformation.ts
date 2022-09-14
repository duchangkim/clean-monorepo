import { User } from '../entity/user.entity';
import { UserRepository } from '../userRepository.interface';
import { GetUserInformationUseCase } from './interface/getUserInformation';

export class GetUserInformationImplementation implements GetUserInformationUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute(accessToken: string): Promise<User> {
    return this.userRepository.getUserInformation(accessToken);
  }
}
