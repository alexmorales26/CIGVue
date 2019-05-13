import { connect } from 'react-redux';
import TeamBarGraph from '../UI/stackedGraph/teamBarplot';
import utils from '../../../utils/teamBarGraphProcessor';
const mapStateToProps = (state) => {
    return {
        serverData:utils.TeamBarPlotProcessor(state.dashboard.serverData) || [],
        serverDataHeaders: state.dashboard.serverDataHeaders || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeamBarGraph);