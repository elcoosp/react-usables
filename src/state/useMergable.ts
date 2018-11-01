import { useState } from 'react'

export function useMergable(
	initialState: IPojo
): [IPojo, (newState: IPojo) => void] {
	const [state, update] = useState(initialState)

	return [state, newState => update({ ...state, ...newState })]
}
