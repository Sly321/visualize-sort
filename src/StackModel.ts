export default class StackModel {
	public value: number
	public active: boolean

	constructor(val: number) {
		this.value = val
		this.active = false
	}
}