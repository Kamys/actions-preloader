import { combineReducers } from 'redux';
import loading, { ILoadingState } from 'src/loading/reducer';

export interface IRootState {
	loading: ILoadingState;
}

const appReducers = combineReducers({
	loading,
});

export default appReducers;