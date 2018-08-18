import { put, takeEvery } from 'redux-saga/effects';
import { ExampleActions } from 'src/example/module/actions';
import { delay } from 'redux-saga';

function* loading() {
	try {
		yield delay(1000);
		yield put(ExampleActions.loading.SUCCESS({}));
	} catch (e) {
		yield put(ExampleActions.loading.FAILURE({}));
	}
}

function* watcherExample() {
	yield [
		takeEvery(ExampleActions.loading.REQUEST, loading),
	];
}

export default [watcherExample];
