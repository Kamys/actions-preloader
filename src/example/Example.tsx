import { Component, CSSProperties } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from 'src/store/rootReducers';
import { ExampleActions, IExampleActions } from 'src/example/module/actions';
import { bindModuleAction, IAsyncAction } from 'src/store/utils';
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

const classRow: CSSProperties = {
	display: 'flex',
	flexWrap: 'wrap',
};

const classCol: CSSProperties = {
	flexBasis: 0,
	flexGrow: 1,
	maxWidth: '100%',
};

class Example extends Component<IProps, IState> {

	state: IState = {};

	onLoading = (action: IAsyncAction) => () => {
		action.REQUEST({});
	}

	Action = ({ title, action, dispatch }) => (
		<div style={classCol}>
			<button onClick={this.onLoading(dispatch)}>{title}</button>
			<Loader action={action}>
				<div>Data 1</div>
				<div>Data 2</div>
				<div>Data 3</div>
				<div>Data 4</div>
			</Loader>
		</div>
	)

	render() {
		const actions = this.props.exampleActions;

		return (
			<div style={classRow}>
				<this.Action
					dispatch={actions.loading}
					action={ExampleActions.loading}
					title={'Loading'}
				/>
				<this.Action
					dispatch={actions.create}
					action={ExampleActions.create}
					title={'Create'}
				/>
				<this.Action
					dispatch={actions.remove}
					action={ExampleActions.remove}
					title={'Remove'}
				/>
				<this.Action
					dispatch={actions.update}
					action={ExampleActions.update}
					title={'Update'}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
