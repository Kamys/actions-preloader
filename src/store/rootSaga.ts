import { fork } from 'redux-saga/effects';
import example from 'src/example/module/saga';

export default function* rootSaga() {
	yield [
		...example.map(fork),
	];
}
