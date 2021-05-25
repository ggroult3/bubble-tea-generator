/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import "../styles/Menu.css"

function Menu({colorList,currentColor,updateColor,title,updateTitle,size,updateSize}) {

    function handleOnloading(){
        document.getElementById("glass").value = currentColor["glass"]
        document.getElementById("tea").value = currentColor["tea"]
        document.getElementById("bubble").value = currentColor["bubble"]
    }

    function handleChange(event){
        updateTitle(event.target.value)
    }
    
    function handleSelectChange (event){
        const colorType = event.target.id
        const colorValue = event.target.selectedOptions[0].value
        const glassColor = currentColor["glass"]
        const teaColor = currentColor["tea"]
        const bubbleColor = currentColor["bubble"]
        switch(colorType){
            case "glass":
                updateColor({"glass" : colorValue , "tea" : teaColor, "bubble" : bubbleColor })
                break;
            case "tea":
                updateColor({"glass" : glassColor , "tea" : colorValue, "bubble" : bubbleColor })
                break;
            case "bubble":
                updateColor({"glass" : glassColor , "tea" : teaColor, "bubble" : colorValue })
                break;
        }
    }

    function handleRangeInputChange(event){
        updateSize(event.target.value)
    }

    window.onload = handleOnloading


    return (
        <div className="btg-menu">
            <form onSubmit={(e) => e.preventDefault() }>
                <span>
                    <label for="title">Nom : </label>
                    <input id="title" type="text" value={title} placeholder="Entrez un nom" onChange={handleChange} />
                </span>
                <span >
                    <label for="glass">Couleur du verre : </label>
                    
                    <select name="glassColorSelector" id="glass" onChange={(e) => handleSelectChange(e)}>
                        {colorList.map((color,i)=>{ return(
                            <option key={`${i} - ${color["value"]}`} value={color["value"]} style={{color:color["value"] , backgroundColor:color["value"]}}>{color["name"]}</option>
                        )})}
                    </select>
                </span>
                <span>
                    <label for="tea">Couleur du thé : </label>
                    
                    <select name="teaColorSelector" id="tea" onChange={(e) => handleSelectChange(e)}>
                        
                        {colorList.map((color,i)=>{ return(
                            <option key={`${i} - ${color["value"]}`} value={color["value"]} style={{color:color["value"] , backgroundColor:color["value"]}}>{color["name"]}</option>
                        )})}
                    </select>
                </span>
                <span>
                    <label for="bubble">Couleur des perles : </label>
                    
                    <select name="bubbleColorSelector" id="bubble" onChange={(e) => handleSelectChange(e)}>
                        
                        {colorList.map((color,i)=>{ return(
                            <option key={`${i} - ${color["value"]}`} value={color["value"]} style={{color:color["value"] , backgroundColor:color["value"]}}>{color["name"]}</option>
                        )})}
                    </select>
                </span>
                <span>
                    <label for="size">Taille : </label>
                    <input type="range" id="size" name="sizeRange" min="0.5" max="1.5" step="0.01" defaultValue={size} onChange={(e) => handleRangeInputChange(e)} />
                </span>
                
                
            </form>
        </div>
    )
}

export default Menu 