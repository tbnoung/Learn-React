class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      option:props.option
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('option')
      const option = JSON.parse(json)
      if (option) {
        this.setState({
          option: option
        })
      }
    } catch (e) {
      console.log('Error');
    }
  }
  componentDidUpdate( prevState){
    if (this.state.option.length !== prevState.option.length) {
      const json = JSON.stringify(this.state.option)
      localStorage.setItem('option', json)
      console.log('component Update');
    }
  }
  componentWillUnmount() {
    console.log('Component WillUnmount');
  }
  handleDeleteOption() {
    this.setState({
      option: []
    })
  }
  handleDelete (optionRemove) {
    this.setState({
      option: this.state.option.filter((option) => {
        return optionRemove !== option
      })
    })
  }
  handlePick() {
  }
  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.option.indexOf(option) >=0) {
      return 'This option already exists'
    } 
      this.setState({
        option: this.state.option.concat([String(option)])
      })
  }
  render () {
    const data = {
      title: 'Indecision App',
      subtitle: 'Sub title App'
    }
    return (
      <div>
        <Header title={data.title} subtitle={data.subtitle} />
        <Action hasOption={this.state.option.length > 0}  handlePick={this.handlePick}/>
        <Options Option={this.state.option} handleDeleteOption={this.handleDeleteOption} handleDelete={this.handleDelete}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}
IndecisionApp.defaultProps= {
  option:[]
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}
Header.defaultProps = {
  title: 'Tbnoung Title'
}
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOption}>Remove All</button>
      {props.Option.map((option) => {
        return (
          <Option key={option} optionText={option} handleDelete={props.handleDelete} />
        )
      })}
    </div>
  )
}
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
      onClick={(e) => {
        props.handleDelete(props.optionText)
      }}>
        remove
        </button>
    </div>
  )
}
const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOption} onClick={props.handlePick}>Add Option</button>
    </div>
  )
}
class AddOption extends React.Component {
  constructor (props){
    super(props)
    this.handdleAddOption = this.handdleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handdleAddOption (e){
    e.preventDefault()
    const  option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    e.target.elements.option.value = ''
    this.setState ({
      error: error
    })
    // if (option ) {
    //   this.props.handleAddOption(option)
    //   e.target.elements.option.value = ''
    // }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handdleAddOption}>
          <input type="text" name="option"></input>
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))