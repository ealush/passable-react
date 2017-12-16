import React from 'react';
import PropTypes from 'prop-types';

export default function withPassable(PassableEnabledForm) {
    const Provide = (props, context) => (
        <PassableEnabledForm {...props} {...context}/>
    );

    Provide.contextTypes = {
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        fields: PropTypes.object,
        warnings: PropTypes.object,
        errors: PropTypes.object
    };

    return Provide;
}