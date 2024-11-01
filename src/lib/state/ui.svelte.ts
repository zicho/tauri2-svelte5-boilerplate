import { getContext, setContext } from 'svelte';

export class UIState {
	currentPage = $state<string>('Home');

	setCurrentPage(title: string) {
		this.currentPage = title;
	}
}

const UI_STATE_KEY = Symbol('UI_STATE');

export function setUiState() {
	return setContext(UI_STATE_KEY, new UIState());
}

export function getUiState() {
	return getContext<ReturnType<typeof setUiState>>(UI_STATE_KEY);
}