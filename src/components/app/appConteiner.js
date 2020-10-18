import { compose } from 'redux';
import { connect } from 'react-redux';
import App from './app';
import { addItemAction, deleteItemAction, doneItemAction } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        items: state.reducerTask.items
    }
};

const mapDispatchToProps = { addItemAction, deleteItemAction, doneItemAction }

const AppConteiner = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(App);

export default AppConteiner;