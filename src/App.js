import React from 'react'
import {connect} from 'react-redux';


const App=({local_variable})=>{
  return(
    <div>
      <center>
        <h1>{local_variable}</h1>
        </center>
    </div>
  )
}
const mapStateToProps= state =>(
  {local_variable: state}
)
export default connect(mapStateToProps)(App);
