import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)
// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAdmin && <WrappedComponent {...props} />}
//       {/* <p>{props.info}</p> */}
//     </div>
//   );
// }
const requireAuthentication = (WrapComponent) => {
  return (props) => (
    <div>
      {props.auth ? (<WrapComponent {...props}/> ) : (<p>No component</p>) }
    </div>
  )
}
const AdminInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo auth={true} info='There are the details'/>, document.getElementById('app'))