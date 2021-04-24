import React from 'react';
import { useParams } from 'react-router';

const ActivateAccount = () => {
    const { token } = useParams();
    console.log(token)
    return (
        <div>
            activate tu cuenta
        </div>
    );
};

export default ActivateAccount;