import { connect } from 'react-redux';
import PieGraph from '../UI/pieChartGraph/pieGraph';

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

export default connect(mapStateToProps,mapDispatchToProps)(PieGraph)