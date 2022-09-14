import { UseCase } from '../../../common/useCase';
import { LoginCommand } from '../../command/loginCommand';
import { User } from '../../entity/user.entity';

export abstract class LoginUseCase implements UseCase<Promise<User>> {
  abstract execute(command: LoginCommand): Promise<User>;
}
