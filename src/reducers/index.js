import { combineReducers } from 'redux';

const INITIAL_STATE = {
	// TODO get initial value for these from user
	currentIndex: 1,
	accumulator: 10,
	array: [4, 1, 7],
	callback: (acc, curr) => (acc + curr),

	steps: [
		{
			index: 0,
			value: 5,
			result: 5,
		},
		{
			index: 1,
			value: 5,
			result: 10,
		}
	],
}

export const stepState = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INCREMENT_STEP':
			// TODO handle end of array and first item in array
			const nextIndex = state.currentIndex + 1;

			const nextStep = {
				index: nextIndex,
				value: state.array[nextIndex],
				result: state.callback(state.accumulator, state.array[state.currentIndex].result),
			};
			return {...state, steps: [...state.steps, nextStep]};
		
		default:
			return {...state};
	}
}

export default combineReducers({
	stepState,
});
