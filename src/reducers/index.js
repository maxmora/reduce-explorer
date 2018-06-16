import { combineReducers } from "redux";

const INITIAL_STATE = {
	steps: []
}

export const stepList = (steps = INITIAL_STATE.steps, action) => {
	switch (action.type) {
		case 'ADD_STEP':
			// TODO make the data coming from step.data more explicit
			return [...steps, action.step];
		
		default:
			return steps;
	}
}

export default combineReducers({
	stepList,
});
