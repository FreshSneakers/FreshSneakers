import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { activate } from '../../services/AuthAccount';
import FadeLoader from "react-spinners/FadeLoader";

const ActivateAccount = () => {

    const { token } = useParams();
    const [loading,setLoading]= useState(true)

    useEffect(()=> {
        activate(token)
        .then(setLoading(false))
    },[])

    



    return (
     <>   {loading ? <FadeLoader color='blue' /> : ' activate tu cuenta' }</>
        
    );
};

export default ActivateAccount;