import { createActionCreator, IAsyncAction } from 'src/store/utils';

const createAsyncAction = createActionCreator('EXAMPLE');

const loading = createAsyncAction('LOADING');

export interface IExampleActions {
	loading: IAsyncAction<{}>;
}

export const ExampleActions: IExampleActions = {
	loading,
};