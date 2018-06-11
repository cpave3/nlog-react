import { connect } from 'react-redux';
import LoginScreen from '../components/LoginScreen';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch, ownProps) => {

};

const LoginScreenContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(LoginScreen);

export default LoginScreenContainer;