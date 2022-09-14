import { UseCase } from '../../../common/useCase';
import { User } from '../../entity/user.entity';

export abstract class GetUserInformationUseCase implements UseCase<Promise<User>> {
  abstract execute(accessToken: string): Promise<User>;
}
