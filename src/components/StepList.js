import React from 'react';
import { Step } from './Step';
//import { incrementStep } from '../actions';

export const StepList = ({stepState, incrementStep}) => {
	return (
		<div>
			<input type="button" value="Next Step" onClick={incrementStep}/>
			<p>Current Index: {stepState.currentIndex}</p>
			<p>Accumulator: {stepState.accumulator}</p>
			<p>Array: <input type="text" defaultValue="raw JS array here" /></p>
			<p>Callback: <input type="text" defaultValue="callback def here" /></p>
			<ul>
				{stepState.steps.map(step => (
					<Step key={step.index} step={step} />
				))}
			</ul>
		</div>
	);
}
