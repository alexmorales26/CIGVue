import { connect } from 'react-redux';
import SecondPieGraph from '../UI/pieChartGraph/secondPieGraph';
import utils from '../../../utils/selectUserNameProcessor'
const mapStateToProps = (state) => {
    return {
        serverData:state.dashboard.serverData || [],
        serverDataHeaders: state.dashboard.serverDataHeaders || [],
        userNames: utils.userNameProcessor(state.dashboard.serverData) || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SecondPieGraph)
