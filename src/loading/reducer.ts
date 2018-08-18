export interface ILoadingState {
	loadingActions: { [key: string]: boolean };
}

const initialState = (): ILoadingState => ({
	loadingActions: {},
});

export function extractActionIndicator(actionType: string): string {
	const indexLast = actionType.lastIndexOf('_');
	return actionType.slice(0, indexLast);
}

function changeIsLoadingForAction(state: ILoadingState, type: string, isLoading: boolean) {
	const actionIndicator = extractActionIndicator(type);

	return {
		...state,
		loadingActions: {
			...state.loadingActions,
			[actionIndicator]: isLoading,
		},
	};
}

export default function reducer(state: ILoadingState = initialState(), action): ILoadingState {
	const type = action.type;

	if (type.endsWith('_REQUEST')) {
		return changeIsLoadingForAction(state, type, true);
	}

	if (type.endsWith('_SUCCESS') || type.endsWith('_FAILURE')) {
		return changeIsLoadingForAction(state, type, false);
	}

	return state;
}