import { combineReducers } from 'redux';

const INITIAL_STATE = {
	doneProcessing: false,
	currentIndex: 0,

	// TODO initialize from user input
	accumulator: 0,
	// TODO get initial value for these from user
	array: [4, 1, 7],
	callback: (acc, curr) => (acc + curr),

	steps: [],
}

export const stepState = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INCREMENT_STEP':
			return handleIncrementStep(state);
		
		default:
			return {...state};
	}
}

const handleIncrementStep = (state) => {
	if (state.doneProcessing || (state.steps.length >= state.array.length)) {
		return {...state, doneProcessing: true};
	}

	const nextIndex = state.currentIndex + 1;

	const nextStep = {
		index: state.currentIndex,
		value: state.array[nextIndex],
		result: state.callback(state.accumulator, state.array[state.currentIndex]),
	};

	return {
		...state,
		accumulator: nextStep.result,
		currentIndex: nextIndex,
		steps: [...state.steps, nextStep]
	};
}

export default combineReducers({
	stepState,
});
