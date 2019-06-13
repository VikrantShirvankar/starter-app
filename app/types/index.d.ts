import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';

export interface LifeStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  // for testing purposes
  readonly test: any;
}
