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
	if(action.type === 'add_todo_item') {
		const newState = JSON.parse(JSON.stringify(state));//reducer cannot change state, need to deep copy a newState
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if(action.type === 'delete_todo_item') {
		const newState = JSON.parse(JSON.stringify(state));//reducer cannot change state, need to deep copy a newState
		newState.list.splice(action.index, 1);//delete the item based on the index
		return newState;
	}
	return state;
}