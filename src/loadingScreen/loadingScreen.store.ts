import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export type LoadingScreenState = {
  isLoading: boolean;
}

const initialLoadingScreenState: LoadingScreenState = {
  isLoading: true
}

export const LoadingScreenStore = signalStore(
  { providedIn: 'root' },
  withState(initialLoadingScreenState), withMethods((store) => ({
  stopLoading(): void {
    patchState(store, (state) => ({ isLoading: false }))
  },
  startLoading(): void {
    patchState(store, (state) => ({ isLoading: true }))
  },
  toggleLoading(): void {
    patchState(store, (state) => ({ isLoading: !state.isLoading }))
  }
})))