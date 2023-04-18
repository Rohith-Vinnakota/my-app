
import React, { useState } from "react";
const Indexx = () => {
    const array = ["playing cricket", "reading book", "watch TV"];
    const [stateArray, setArrayState] = useState(array);
    const [check, setCheck] = useState(false);
    const [stateIndex, setIndex] = useState();

    function handle(e, itemindex) {

        setCheck(!check);
        setIndex(itemindex);
    }
    function handleDelete(itemIndex) {
        let newArray = stateArray;//Refrence modifed in new and orignal 
        let filteredArray = newArray.filter((el, index) => {
            return index !== itemIndex;
        })
        setArrayState(filteredArray);

    }
    return (
        <>
            <ul>
                {
                    stateArray.map((eachObj, index) => {

                        return <li key={index}><input type="checkbox" name="check" id="check-box" onClick={(e) => { handle(!e.target.value, index) }} key={index} /><span>{eachObj}</span>{(check && stateIndex === index) && <button onClick={() => { handleDelete(index) }}>Delete</button>} </li>
                    })
                }
            </ul>
        </>


    );
}
export default Indexx;