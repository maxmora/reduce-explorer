import React from 'react';

export const Step = ({step}) => (
	<li>
		array[{step.index}]<br/>
		Value: {step.value}<br/>
		Result: {step.result}<br/>
	</li>
);
