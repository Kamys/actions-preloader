import { put, takeEvery } from 'redux-saga/effects';
import { ExampleActions } from 'src/example/module/actions';
import { delay } from 'redux-saga';
import { IAsyncAction } from 'src/store/utils';

function handler(action: IAsyncAction) {
	return function* loading() {
		try {
			yield delay(1000);
			yield put(action.SUCCESS({}));
		} catch (e) {
			yield put(action.FAILURE({}));
		}
	};
}

function* watcherExample() {
	const { loading, create, remove, update } = ExampleActions;
	yield [
		takeEvery(loading.REQUEST, handler(loading)),
		takeEvery(create.REQUEST, handler(create)),
		takeEvery(remove.REQUEST, handler(remove)),
		takeEvery(update.REQUEST, handler(update)),
	];
}

export default [watcherExample];
