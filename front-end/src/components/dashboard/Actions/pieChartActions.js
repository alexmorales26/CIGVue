import { connect } from 'react-redux';
import PieGraph from '../UI/pieChartGraph/pieGraph';
import utils from '../../../utils/selectTeamNameProcessor'
const mapStateToProps = (state) => {
    return {
        serverData:state.dashboard.serverData || [],
        serverDataHeaders: state.dashboard.serverDataHeaders || [],
       teamNames: utils.teamNameProcessor(state.dashboard.serverData) || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PieGraph)
