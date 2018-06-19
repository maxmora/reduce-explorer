import { connect } from 'react-redux';

import { StepList } from '../components/StepList';
import { incrementStep } from '../actions';

const mapStateToProps = (stepState) => (stepState);

const mapDispatchToProps = {
	incrementStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
