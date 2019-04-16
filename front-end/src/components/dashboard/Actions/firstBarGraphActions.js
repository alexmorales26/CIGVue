import { connect } from 'react-redux';
import FirstBarGraph from '../UI/stackedGraph/mixedBarPlot'

const mapStateToProps = (state) => {
    return {
        serverData:state.dashboard.serverData || [],
        serverDataHeaders: state.dashboard.serverDataHeaders || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstBarGraph);