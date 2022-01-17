import React, {Fragment} from "react";

 export const renderInput = (item) => {
    return (
        <>
            <label  id={item._uid}  type="text" className="block mb-1">{item.label}</label>
        </>
    )
}

export const renderSelect = (item) => {
    return (
        <>
            <select className="form-select py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full">
                <option selected>{item.label}</option>
                {item.options.map((op, index)=>(
                    <option key={op} value={index}>{op}</option>
                ))}

            </select>
        </>
    )
}



export const renderRadio = (item) => {
    return (
        <div className="form-check form-check-inline">
            <label className="block mb-1">{item.label}</label>
            {item.options.map((op, index)=>{
                return (
                    <Fragment key={op}>
                        <label className="form-check-label inline-block text-gray-800">{op}</label>
                        <input
                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border   checked:bg-blue-600 checked:border-blue-600  transition   cursor-pointer"
                            type={item.component} name={item.label} id={op} value={`option${index}`}/>
                    </Fragment>
                )
            })}
        </div>
    )
}

export const enumComponents = {
    'text': renderInput,
    'select': renderSelect,
    'radio': renderRadio,
}