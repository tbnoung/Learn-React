class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
  handleAdd (){
    this.setState({
      count: this.state.count + 1
    })
  }
  handleMinus() {
    this.setState({
      count: this.state.count - 1
    })
  }
  handleReset() {
    this.setState({
      count: 0
    })
  }
}
ReactDOM.render(<Counter/>, document.getElementById('app'))