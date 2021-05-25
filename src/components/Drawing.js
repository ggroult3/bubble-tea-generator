import Glass from "./Glass"
import Tea from "./Tea"
import Bubble from "./Bubble"
import Shadow from "./Shadow"
import "../styles/Drawing.css"

function Drawing ({isVisible,color}){

    
    
    return(
        <div className="btg-drawing">
            <svg viewBox="0 0 137.5 195">
                {isVisible["glass"] ? <Glass color = {color["glass"]} /> : null}
                {isVisible["tea"] ? <Tea color = {color["tea"]} /> : null}
                {isVisible["bubble"] ? <Bubble color = {color["bubble"]} /> : null}
                {isVisible["shadow"] ? <Shadow color = {color["tea"]} /> : null}
                
            </svg>
        </div>
    )
}

export default Drawing