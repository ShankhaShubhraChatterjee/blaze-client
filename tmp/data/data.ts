interface TodoInterface {
	id: number;
	title: string;
	index: number;
	starred: boolean;
	checked: boolean;
	description: string;
}
export const todos: Array<TodoInterface> = [
	{
		id: 1,
		title: "Do Not Do Anything",
		index: 2,
		starred: true,
		checked: false,
		description:
			"Task-1 it seems like this todo is wayy much larger and longer than i expected it to be",
	},
	{
		id: 2,
		index: 3,
		starred: false,
		checked: true,
		title: "Do Something Crazy As Hell",
		description: "Task-2 Is Somewhat Smaller Comparatively",
	},
	{
		id: 3,
		index: 4,
		starred: false,
		checked: false,
		title: "Do Nothing At All",
		description: "Task 4 Is Biggg !!!",
	},
	{
		id: 4,
		index: 5,
		starred: false,
		checked: false,
		title: "Do Whatever You Want",
		description: "Task 5 Is Tiny & Random",
	},
	{
		id: 5,
		index: 1,
		starred: false,
		checked: false,
		title: "Do Nothing At All",
		description: "Task 4 Is Biggg !!!",
	},
	{
		id: 6,
		index: 6,
		starred: false,
		checked: false,
		title: "Do Whatever You Want",
		description: "Task 5 Is Tiny & Random",
	},
];
