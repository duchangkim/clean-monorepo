import { Usecase } from '@core/common/usecase';

export abstract class DeleteCounterUsecase implements Usecase<void> {
  abstract execute(counterId: string): void;
}
