import { CounterService } from './counter.service';

export function counterServiceFactory(i: any) {
  return i.get('counterService');
}

export const counterServiceProvider = {
  provide: CounterService,
  useFactory: counterServiceFactory,
  deps: ['$injector']
};