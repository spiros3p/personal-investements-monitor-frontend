import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SingleChartComponent } from './single-chart.component';

describe('SingleChartComponent', () => {
  let spectator: Spectator<SingleChartComponent>;
  const createComponent = createComponentFactory(SingleChartComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
