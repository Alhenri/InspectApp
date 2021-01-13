import React, { useContext } from 'react';
import dataContext from '../../../context/DataContextProvider'

export default function Card(){
    const { dado, changeData } = useContext(dataContext)
    console.log("dado: ",dado);
    return(
        <div>
            Olá card
        </div>
    )
}