class VisibilityToggle extends React.Component {
  constructor (props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>{this.state.visible ? 'Hide detail' : 'Show detail'}</button>
        {this.state.visible && (
          <div>
            <p>Hey Show Detail Tbnoung</p>
          </div>
        )}
      </div>
    )
  }
  handleToggle () {
    this.setState({
      visible: !this.state.visible
    })
  }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))



// const appRoot = document.getElementById("app");
// let visable = false
// const CloseVisable = () => {
//   visable = !visable
//   render()
// }
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visable Example</h1>
//       <button onClick={CloseVisable}>
//         {visable ? 'Hide Detail' : 'Show Detail'}
//       </button>
//       {visable && (
//         <div>
//           <p>Hey Deail so good</p>
//         </div>
//       )}
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }
// render()


