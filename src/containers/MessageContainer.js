import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Message from './../components/Message';

class MessageContainer extends React.Component {

    render() {
        var { message } = this.props
        console.log(message)
        return (
            <Message message={message} />

        );

    }
}
MessageContainer.propTypes = {
    message: PropTypes.any
}


const mapStateToProps = state => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProps, null)(MessageContainer);
