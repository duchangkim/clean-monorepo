import { Usecase } from '../../../common/usecase';

export abstract class DeleteCounterUsecase implements Usecase<void> {
  abstract execute(counterId: string): void;
}
