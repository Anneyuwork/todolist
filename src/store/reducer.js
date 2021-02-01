const defaultState = {
	inputValue: '123',
	list: [1,2]
}

export default (state = defaultState, action) => {
	if(action.type === 'change_input_value') {
		const newState = JSON.parse(JSON.stringify(state));//reducer cannot change state, need to deep copy a newState
		newState.inputValue = action.value;
		return newState;
	}
	return state;
}