import { useState } from 'react'

export function useMergedState(initialState) {
	const [state, update] = useState(initialState)
	return [state, newState => update({ ...state, ...newState })]
}

export function useTogglable(initialState) {
	const [isToggled, toggle] = useState(initialState)
	return [isToggled, () => toggle(!isToggled)]
}
