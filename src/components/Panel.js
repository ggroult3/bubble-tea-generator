import Drawing from "./Drawing"
import NameSVG from "./NameSVG"
import "../styles/Panel.css"
import {useEffect} from "react"

function Panel({title,color,size}) {

    useEffect(() => {
        let str = "scale(" + size + ")"
        document.getElementsByClassName("btg-product")[0].childNodes[0].style.transform = str
    }, [size])

    return(
        <div className="col-sm-8 btg-panel">
            <div className="row">
                <div className="col-sm-12  d-flex justify-content-center btg-product" >
                    <Drawing isVisible={{"glass" : true,"tea" : true,"bubble" : true, "shadow" : true}} color = {color} />
                </div>
                <div className="col-sm-12 btg-product-name" >
                    <NameSVG title={title}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4  d-flex justify-content-center btg-glass" >
                    <Drawing isVisible={{"glass" : true,"tea" : false,"bubble" : false, "shadow" : false}} color = {color} />
                </div>
                <div className="col-sm-4  d-flex justify-content-center btg-tea" >
                    <Drawing isVisible={{"glass" : false,"tea" : true,"bubble" : false, "shadow" : false}} color = {color} />
                </div>
                <div className="col-sm-4  d-flex justify-content-center btg-bubble" >
                    <Drawing isVisible={{"glass" : false,"tea" : false,"bubble" : true, "shadow" : false}} color = {color} />
                </div>
            </div>
        </div>
    )
    
}

export default Panel