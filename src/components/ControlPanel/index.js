import React, {useEffect, useState} from "react";
import Confi from '../../confi.json'
import {enumComponents} from "../Controls";

export default function ControlPanel({controlsAdded, setControlsAdded}) {
    const [controls, setControls] = useState(Confi)

    useEffect(() => {
        setControls(Confi)
    }, [Confi])


    const handleAdd = (event, id) => {
        event.preventDefault()
        setControlsAdded([...controlsAdded, id])
    }

    const disabledToAdd = (id) => {
        return controlsAdded.some(item => item._uid === id)
    }

    return (
        <div className='flex  flex-col h-full w-1/2  justify-center items-center bg-[#525558]'>
            <h1 className='text-white'>
                Controles disponibles:
            </h1>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4   ">
                    {controls.map(item => {
                        return (
                            <div key={item._uid} className="flex flex-row mb-4 justify-between">
                                {enumComponents[item.component](item)}
                                <button
                                    disabled={disabledToAdd(item._uid)}
                                    title={disabledToAdd(item._uid) ? 'Ya exisite' : 'add'}
                                    onClick={(event) => handleAdd(event, item)}>ADD
                                </button>
                            </div>
                        )
                    })}
                </form>
            </div>
        </div>
    )
}