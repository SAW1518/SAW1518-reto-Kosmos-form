import React, {useEffect, useState} from "react";
import {enumComponents} from "../Controls";
import Confi from "../../confi.json";


export default function Form ({controlsAdded, setControlsAdded}){
    const handleAdd = (event,id) => {
        event.preventDefault()
        setControlsAdded(controlsAdded.filter(item => item._uid !== id ))
        console.log('onClick', id)
    }


    return (
        <div className='flex  flex-col h-full w-1/2  justify-center items-center bg-[#525558]'>
            <h1 className='text-white' >
                Agregados:
            </h1>
            <div className="w-full max-w-xs ">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {controlsAdded.map(item => {
                        return (
                            <div key={item._uid} className="flex flex-row mb-4 justify-between">
                                {enumComponents[item.component](item)}
                                <button onClick={(event)=>handleAdd(event, item._uid)}>Quitar</button>
                            </div>
                        )
                    })}
                </form>
            </div>
        </div>
    )
}