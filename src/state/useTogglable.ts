import { useState } from 'react'

export function useTogglable(initialState: boolean): [boolean, () => void] {
	const [isToggled, toggle] = useState(initialState)

	return [isToggled, () => toggle(!isToggled)]
}
