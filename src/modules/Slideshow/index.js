import { useEffect, useState } from "react";
import "./style.css";

function Slideshow () {

    let colorArray = [
        "blue",
        "red",
        "green",
        "pink"
    ]

    /* useEffect(() => {
        setTimeout(() => {
            if(activeCard === colorArray.length-1) {
                setActiveCard(0)
            }
            else{
                setActiveCard(activeCard + 1)
            }
        }, 2000)
    }) */

    const [activeCard, setActiveCard] = useState(0);

    function SlideshowCard ({color, index}) {

        let arrayLength = colorArray.length-1;

        const setClassNameIsActive = () => index === activeCard ? "active-card" : "";

        const orderCalc = () => index;

        /* function orderCalc () {
            let returnValue;
            let arrayLength = colorArray.length-1;

            if(index === activeCard) {
                returnValue = 0;
            }

            else{
                returnValue = activeCard - (-index)
            }

            returnValue = activeCard - (-index)
            

            return returnValue;
        } */

        return (
            <div className={`slideshow-card ${setClassNameIsActive()}`} style={{backgroundColor: color, order: orderCalc()}}>
                <h1>{index}</h1>
            </div>
        )
    }

    return(
        <div className="slideshow-container-div">
            {colorArray.map((element, index) => <SlideshowCard color={element} index={index} />)}
        </div>
    )
}

export default Slideshow;