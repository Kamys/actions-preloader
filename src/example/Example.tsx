import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from 'src/store/rootReducers';
import { ExampleActions, IExampleActions } from 'src/example/module/actions';
import { bindModuleAction } from 'src/store/utils';
import Loader from 'src/loading/Loader';

export interface IState {

}

export interface IProps {
	exampleActions: IExampleActions;
}

const mapStateToProps = (state: IRootState) => ({
	/// nameStore: state.nameStore
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	exampleActions: bindModuleAction(ExampleActions, dispatch),
});

class Example extends Component<IProps, IState> {

	state: IState = {};

	onLoading = () => {
		this.props.exampleActions.loading.REQUEST({});
	}

	render() {
		return (
			<>
				<button onClick={this.onLoading}>Loading</button>
				<Loader action={ExampleActions.loading}>
					<div>Data 1</div>
					<div>Data 2</div>
					<div>Data 3</div>
					<div>Data 4</div>
				</Loader>
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
