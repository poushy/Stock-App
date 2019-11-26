import {connect} from 'react-redux';
import Overlay from "../views/components/Overlay";
import {isSearchDisabled} from "../selectors/search";

const mapStateToProps = (state) => {
    return {
    	isDisabled: !isSearchDisabled(state)
    };
};

export default connect(mapStateToProps)(Overlay);