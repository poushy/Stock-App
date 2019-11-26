import {connect} from 'react-redux';
import Details from "../views/workflows/Details";
import {getError, getStockDetails} from "../selectors/details";

const mapStateToProps = (state) => {
    return {
        details: getStockDetails(state),
        error: getError(state)
    };
};

export default connect(mapStateToProps)(Details);