import { CounterRepositoryImpl, LocalStorageService } from '@peterpan/data';
import {
  AssignCounterLabelUsecase,
  AssignCounterLabelUsecaseImpl,
  CounterRepository,
  CreateCounterUsecase,
  CreateCounterUsecaseImpl,
  DecrementCounterUsecase,
  DecrementCounterUsecaseImpl,
  DeleteCounterUsecase,
  DeleteCounterUsecaseImpl,
  FilterCountersByLabelUsecase,
  FilterCountersByLabelUsecaseImpl,
  GetAllCountersUsecase,
  GetAllCountersUsecaseImpl,
  IncrementCounterUsecase,
  IncrementCounterUsecaseImpl,
  UpdateDecrementAmountUsecase,
  UpdateDecrementAmountUsecaseImpl,
  UpdateIncrementAmountUsecase,
  UpdateIncrementAmountUsecaseImpl,
} from '@peterpan/domain';

export class CounterFactory {
  private counterRepository: CounterRepository;

  constructor(private localStorageService: LocalStorageService) {
    this.counterRepository = new CounterRepositoryImpl(this.localStorageService);
  }

  getCreateCounterUsecase(): CreateCounterUsecase {
    return new CreateCounterUsecaseImpl(this.counterRepository);
  }

  getDeleteCounterUsecase(): DeleteCounterUsecase {
    return new DeleteCounterUsecaseImpl(this.counterRepository);
  }

  getGetAllCountersUsecase(): GetAllCountersUsecase {
    return new GetAllCountersUsecaseImpl(this.counterRepository);
  }

  getIncrementCounterUsecase(): IncrementCounterUsecase {
    return new IncrementCounterUsecaseImpl(this.counterRepository);
  }

  getDecrementCounterUsecase(): DecrementCounterUsecase {
    return new DecrementCounterUsecaseImpl(this.counterRepository);
  }

  getUpdateIncrementCountUsecase(): UpdateIncrementAmountUsecase {
    return new UpdateIncrementAmountUsecaseImpl(this.counterRepository);
  }

  getUpdateDecrementCountUsecase(): UpdateDecrementAmountUsecase {
    return new UpdateDecrementAmountUsecaseImpl(this.counterRepository);
  }

  getAssignCounterLabelUsecase(): AssignCounterLabelUsecase {
    return new AssignCounterLabelUsecaseImpl(this.counterRepository);
  }

  getFilterCountersByLabelUsecase(): FilterCountersByLabelUsecase {
    return new FilterCountersByLabelUsecaseImpl();
  }
}
