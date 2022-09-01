import { counter } from '@peterpan/domain';
import * as data from '@peterpan/data';

export class CounterFactory {
  private counterRepository: counter.CounterRepository;

  constructor(private localStorageService: data.LocalStorageService) {
    this.counterRepository = new data.CounterRepositoryImpl(this.localStorageService);
  }

  getCreateCounterUsecase(): counter.CreateCounterUsecase {
    return new counter.CreateCounterUsecaseImpl(this.counterRepository);
  }

  getDeleteCounterUsecase(): counter.DeleteCounterUsecase {
    return new counter.DeleteCounterUsecaseImpl(this.counterRepository);
  }

  getGetAllCountersUsecase(): counter.GetAllCountersUsecase {
    return new counter.GetAllCountersUsecaseImpl(this.counterRepository);
  }

  getIncrementCounterUsecase(): counter.IncrementCounterUsecase {
    return new counter.IncrementCounterUsecaseImpl(this.counterRepository);
  }

  getDecrementCounterUsecase(): counter.DecrementCounterUsecase {
    return new counter.DecrementCounterUsecaseImpl(this.counterRepository);
  }

  getUpdateIncrementCountUsecase(): counter.UpdateIncrementAmountUsecase {
    return new counter.UpdateIncrementAmountUsecaseImpl(this.counterRepository);
  }

  getUpdateDecrementCountUsecase(): counter.UpdateDecrementAmountUsecase {
    return new counter.UpdateDecrementAmountUsecaseImpl(this.counterRepository);
  }

  getAssignCounterLabelUsecase(): counter.AssignCounterLabelUsecase {
    return new counter.AssignCounterLabelUsecaseImpl(this.counterRepository);
  }

  getFilterCountersByLabelUsecase(): counter.FilterCountersByLabelUsecase {
    return new counter.FilterCountersByLabelUsecaseImpl();
  }
}
