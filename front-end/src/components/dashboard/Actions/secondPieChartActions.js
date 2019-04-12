import { connect } from 'react-redux';
import SecondPieGraph from '../UI/pieChartGraph/secondPieGraph';
import utils from '../../../utils/selectUserNameProcessor'
const mapStateToProps = (state) => {
    return {
        serverData:state.dashboard.serverData || [],
        serverDataHeaders: state.dashboard.serverDataHeaders || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      transformUserNameData: (data) => {
        console.log("HELLO");
        dispatch(utils.userNameProcessor(data));
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SecondPieGraph)
