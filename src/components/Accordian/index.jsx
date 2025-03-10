
import { useState } from "react"
import data from "./data"
import "./style.css"
export default function Accordian() {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])


    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {
        const cpyMultiple = [...multiple]

        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId)
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(cpyMultiple)
        console.log(multiple, findIndexOfCurrentId)
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(prev => !prev)}> Multi Selection</button>
            <div className="accordian">
                {data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div
                            onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                            <div className="content">
                                {dataItem.answer}
                            </div>
                            : null}
                    </div>)
                    : <div>No data found</div>

                }
            </div>
        </div>
    )
}