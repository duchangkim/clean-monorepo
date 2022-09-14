import { UseCase } from '../../../common/useCase';
import { updateUserNameCommand } from '../../command/updateUserNameCommand';
import { User } from '../../entity/user.entity';

export abstract class UpdateUserNameUseCase implements UseCase<Promise<User>> {
  abstract execute(command: updateUserNameCommand): Promise<User>;
}
