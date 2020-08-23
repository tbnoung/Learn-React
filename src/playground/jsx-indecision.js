console.log("App.js is Running!");

//JSX - Javascript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  option: []
}
const onFormSubmit = (e) => {
  e.preventDefault()
  console.log('Form submit')
  const option = e.target.elements.option.value
  if (option) {
    app.option.push(option)
    e.target.elements.option.value = ''
    render()
  }
}
const remove = () => {
  app.option = []
  render()
}
const onMake = () => {
  const randomNum = Math.floor((Math.random() * app.option.length))
  const option = app.option[randomNum]
  // console.log(randomNum)
  alert(option)
}
const appRoot = document.getElementById("app");
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length > 0 ? 'Here are your option' : 'No option'}</p>
      <p>{app.option.length}</p>
      <button disabled={app.option.length === 0} onClick={onMake}> Whay should I do?</button>
      <ol>
        {
          app.option.map((data) => <li key={data}>Option : {data}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add option</button>
        <button onClick={remove}>Remove All</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}
render()

