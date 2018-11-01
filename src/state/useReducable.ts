import { useReducer } from 'react'

interface IAction {
	type: string
	payload: IPojo
}

interface IReducers {
	[key: string]: (state: IPojo, action: IAction) => IPojo
}

export function useReducableState(
	reducers: IReducers,
	initialState = {}
): [IPojo, (action: IAction) => void] {
	const [state, dispatch] = useReducer(
		(state: IPojo, action: IAction) =>
			reducers[action.type] ? reducers[action.type](state, action) : state,
		initialState
	)

	return [state, dispatch]
}
