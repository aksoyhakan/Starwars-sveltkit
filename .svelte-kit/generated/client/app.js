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
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [0,3,5];

export const dictionary = {
		"/": [6],
		"/(auth)/login": [~7],
		"/planets": [~9,[2]],
		"/planets/[planetId]": [~10,[2,3]],
		"/planets/[planetId]/residents": [~11,[2,3]],
		"/planets/[planetId]/residents/[playerId]": [~12,[2,3]],
		"/players": [~13,[4]],
		"/players/[playerId]": [~14,[4,5]],
		"/players/[playerId]/films": [~15,[4,5]],
		"/players/[playerId]/films/[filmId]": [~16,[4,5]],
		"/(auth)/register": [~8]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';