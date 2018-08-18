import { createActionCreator, IAsyncAction } from 'src/store/utils';

const createAsyncAction = createActionCreator('EXAMPLE');

const loading = createAsyncAction('LOADING');
const create = createAsyncAction('CREATE');
const remove = createAsyncAction('REMOVE');
const update = createAsyncAction('UPDATE');

export interface IExampleActions {
	loading: IAsyncAction<{}>;
	create: IAsyncAction<{}>;
	remove: IAsyncAction<{}>;
	update: IAsyncAction<{}>;
}

export const ExampleActions: IExampleActions = {
	loading,
	create,
	remove,
	update,
};