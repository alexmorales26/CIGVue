import { connect } from 'react-redux';
import PieGraph from '../UI/pieChartGraph/pieGraph';
//import utils from '../utils.js'
const mapStateToProps = (state) => {
    return {
        serverData:state.dashboard.serverData || [],
        serverDataHeaders: state.dashboard.serverDataHeaders || [],
      //  userNames: utils.selectUserName(state.dashboard.serverData);
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PieGraph)
