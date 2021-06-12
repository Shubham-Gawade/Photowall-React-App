//connect store with Main component
//Its job to provide data to Main component
import Main from './Main'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router-dom'

function mapStatetoProps(state){
    return {
        posts : state.posts,
        comments : state.comments
    }
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

const App = withRouter(connect(mapStatetoProps,mapDispatchtoProps)(Main))

export default App