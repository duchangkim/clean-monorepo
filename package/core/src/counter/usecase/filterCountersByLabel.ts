import { Counter } from '../entity/counter.entity';
import { FilterCountersByLabelUsecase } from './interface/filterCountersByLabel';

export class FilterCountersByLabelUsecaseImpl implements FilterCountersByLabelUsecase {
  execute(counters: Counter[], filterLabel: string): Counter[] {
    const formattedFilterLabel = this.formatFilterLabel(filterLabel);

    return counters.filter((counter) => counter.label.toLowerCase().includes(formattedFilterLabel));
  }

  private formatFilterLabel(filterLabel: string): string {
    return filterLabel.trim().toLowerCase();
  }
}
