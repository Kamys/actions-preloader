import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'src/store/rootReducers';
import { IAsyncAction } from 'src/store/utils';
import { extractActionIndicator, ILoadingState } from 'src/loading/reducer';
import { ComplexActionCreator, ComplexActionCreator1 } from 'redux-act';

export interface IState {

}

export interface IProps {
	action: IAsyncAction;
	loading?: ILoadingState;
}

const mapStateToProps = (state: IRootState) => ({
	loading: state.loading,
});

class Loader extends Component<IProps, IState> {

	state: IState = {};

	render() {
		const { loading, action, children } = this.props;

		const indicator = extractActionIndicator(action.REQUEST.toString());

		const isLoading = loading.loadingActions[indicator];

		if (isLoading) {
			return <div>Loading...</div>;
		}

		return children;
	}
}

export default connect(mapStateToProps)(Loader);
