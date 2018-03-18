import * as React from "react"
import SortModel from "./SortModel"
import Bar from "./Bar"

export interface State {
	model: SortModel,
	swapped: boolean
}

export default class SortController extends React.Component<{}, State> {

	constructor(props: any) {
		super(props)

		this.state = {
			model: new SortModel(100),
			swapped: false
		}
	}

	componentDidMount() {
		this.setState(this.state)
	}

	shuffle() {
		this.setState({ model: new SortModel(100) })
	}

	startBubbleSort() {
		let swapped = false
		const length = this.state.model.stack.length

		let i = 0

		let innerInterval = setInterval(() => {
			if (this.state.model.stack[i].value > this.state.model.stack[i + 1].value) {
				var temp = this.state.model.stack[i]
				this.state.model.stack[i] = this.state.model.stack[i + 1]
				this.state.model.stack[i + 1] = temp
				this.state.model.stack[i + 1].active = true
				swapped = true
			} else {
				this.state.model.stack[i].active = false
				this.state.model.stack[i + 1].active = false
			}
			this.setState({ model: this.state.model, swapped }, () => {
				if (i == length - 2) {
					if (!this.state.swapped) {
						clearInterval(innerInterval)
					} else {
						i = 0
					}
				} else {
					i++
				}
			})
		}, 1)
	}

	render() {
		return <div>
			<button onClick={this.startBubbleSort.bind(this)}>Start</button>
			<button onClick={this.shuffle.bind(this)}>Shuffle</button>
			<div style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly"
			}}>
				{this.state.model.stack.map(val => <Bar key={val.value} model={val} />)}
			</div>
		</div>

	}
}