import * as React from "react"
import StackModel from "./StackModel"

export interface Props {
	model: StackModel
}

export default class Bar extends React.Component<Props, {}> {

	render() {
		return <div
			style={{
				height: this.props.model.value,
				backgroundColor: this.color,
				float: "left",
				flexGrow: 1,
				flexBasis: 0
			}}
		/>
	}

	private get color() {
		if (this.props.model.active) {
			console.log("active")
			return "#8BC34A"
		}

		if (this.props.model.value < 10) {
			return `#0000${this.props.model.value}0`
		}

		if (this.props.model.value < 100) {
			return `#000${this.props.model.value}0`
		}

		if (this.props.model.value < 1000) {
			return `#00${this.props.model.value}0`
		}

		return `${this.props.model.value}`
	}
}