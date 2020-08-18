import BottomBar from './BottomBar'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoading: state.app.loading
  }
}

export default connect(mapStateToProps)(BottomBar)
