import { connect } from 'react-redux';
import SecondBarGraph from '../UI/stackedGraph/secondBarPlot'

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

export default connect(mapStateToProps,mapDispatchToProps)(SecondBarGraph);
