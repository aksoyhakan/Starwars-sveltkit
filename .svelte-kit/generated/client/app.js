export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [0,4];

export const dictionary = {
		"/": [5],
		"/(auth)/login": [~6],
		"/planets": [~8,[2]],
		"/players": [~9,[3]],
		"/players/[playerId]": [~10,[3,4]],
		"/players/[playerId]/films": [~11,[3,4]],
		"/players/[playerId]/films/[filmId]": [~12,[3,4]],
		"/(auth)/register": [~7]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';