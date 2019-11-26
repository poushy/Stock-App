import {connect} from 'react-redux';
import {setValue} from "../modules/search";
import Search from "../views/workflows/Search";
import {getError, getSearchList, getPlaceHolderText} from "../selectors/search";

const mapStateToProps = (state) => {
    return {
        options: getSearchList(state),
        placeholder: getPlaceHolderText(state),
        error: getError(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetValue: (selected) => dispatch(setValue(selected))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);