import { useState } from 'react'

// Plain old JS object
interface Pojo {
	[key: string]: any
}

export function useMergedState(
	initialState: Pojo
): [Pojo, (newState: Pojo) => void] {
	const [state, update] = useState(initialState)
	return [state, newState => update({ ...state, ...newState })]
}

export function useTogglable(initialState: boolean): [boolean, () => void] {
	const [isToggled, toggle] = useState(initialState)
	return [isToggled, () => toggle(!isToggled)]
}
