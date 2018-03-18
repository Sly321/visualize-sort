import StackModel from "./StackModel"

export default class SortModel {
	public stack: Array<StackModel>

	constructor(range: number = 100) {
		for (var a: Array<StackModel> = [], i = 0; i < range; ++i) a[i] = new StackModel(i);

		let tmp, current, top = a.length;
		if (top) while (--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = a[current];
			a[current] = a[top];
			a[top] = tmp;
		}

		this.stack = a
	}
}