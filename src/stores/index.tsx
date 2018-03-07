import demoStore, { DemoStore } from './demoStore';
import logStore, { LogStore } from './logStore';

export interface Stores {
  demoStore: DemoStore;
  logStore: LogStore;
}
const stores: Stores = {
  demoStore,
  logStore,
};
 
export default stores;