import { connect } from "react-redux";

import { addStep } from "../actions";
import { StepList } from "../components/StepList";

const mapStateToProps = state => ({
	steps: state.steps
});

const mapDispatchToProps = {
	addStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
