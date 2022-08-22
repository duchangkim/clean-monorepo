import { Usecase } from 'src/common/usecase';

export abstract class DeleteCounterUsecase implements Usecase<void> {
  abstract execute(counterId: string): void;
}
