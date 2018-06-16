import React, { Component } from 'react';
import { Step } from './Step.js';

export const StepList = ({steps}) => {
	return (
	<ul>
		{this.props.steps.map(step => (
			<Step key={step.itemIndex} {...step} />
		))}
	</ul>
	)
}
