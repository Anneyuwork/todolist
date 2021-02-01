import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'

const defaultState = {
	inputValue: '123',
	list: [1,2]
}

export default (state = defaultState, action) => {
	if(action.type === CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));//reducer cannot change state, need to deep copy a newState
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));//reducer cannot change state, need to deep copy a newState
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if(action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));//reducer cannot change state, need to deep copy a newState
		newState.list.splice(action.index, 1);//delete the item based on the index
		return newState;
	}
	return state;
}