/* eslint-disable default-case */
import Panel from "./Panel"
import Sidebar from "./Sidebar"
import "../styles/Layout.css"
import {useState,useEffect} from "react"


function App() {

    const colorList = [
        {name:"Alice Blue",value:"#F0F8FF"},
        {name:"Antique White",value:"#FAEBD7"},
        {name:"Aqua",value:"#00FFFF"},
        {name:"Aquamarine",value:"#7FFFD4"},
        {name:"Azure",value:"#F0FFFF"},
        {name:"Beige",value:"#F5F5DC"},
        {name:"Bisque",value:"#FFE4C4"},
        {name:"Black",value:"#000000"},
        {name:"Blanched Almond",value:"#FFEBCD"},
        {name:"Blue",value:"#0000FF"},
        {name:"Blue Violet",value:"#8A2BE2"},
        {name:"Brown",value:"#A52A2A"},
        {name:"Burly Wood",value:"#DEB887"},
        {name:"Cadet Blue",value:"#5F9EA0"},
        {name:"Chartreuse",value:"#7FFF00"},
        {name:"Chocolate",value:"#D2691E"},
        {name:"Coral",value:"#FF7F50"},
        {name:"Cornflower Blue",value:"#6495ED"},
        {name:"Corn Silk",value:"#FFF8DC"},
        {name:"Crimson",value:"#DC143C"},
        {name:"Cyan",value:"#00FFFF"},
        {name:"Dark Blue",value:"#00008B"},
        {name:"Dark Cyan",value:"#008B8B"},
        {name:"Dark Golden Rod",value:"#B8860B"},
        {name:"Dark Gray",value:"#A9A9A9"},
        {name:"Dark Grey",value:"#A9A9A9"},
        {name:"Dark Green",value:"#006400"},
        {name:"Dark Khaki",value:"#BDB76B"},
        {name:"Dark Magenta",value:"#8B008B"},
        {name:"Dark Olive Green",value:"#556B2F"},
        {name:"Dark Orange",value:"#FF8C00"},
        {name:"Dark Orchid",value:"#9932CC"},
        {name:"Dark Red",value:"#8B0000"},
        {name:"Dark Salmon",value:"#E9967A"},
        {name:"Dark Sea Green",value:"#8FBC8F"},
        {name:"Dark Slate Blue",value:"#483D8B"},
        {name:"Dark Slate Gray",value:"#2F4F4F"},
        {name:"Dark Slate Grey",value:"#2F4F4F"},
        {name:"Dark Turquoise",value:"#00CED1"},
        {name:"Dark Violet",value:"#9400D3"},
        {name:"Deep Pink",value:"#FF1493"},
        {name:"Deep Sky Blue",value:"#00BFFF"}, 	 	 
        {name:"Dim Gray",value:"#696969"}, 	 
        {name:"Dim Grey",value:"#696969"}, 	 
        {name:"Dodger Blue",value:"#1E90FF"}, 	 
        {name:"Fire Brick",value:"#B22222"}, 	 
        {name:"Floral White",value:"#FFFAF0"}, 	 
        {name:"Forest Green",value:"#228B22"}, 	 
        {name:"Fuchsia",value:"#FF00FF"}, 	 
        {name:"Gainsboro",value:"#DCDCDC"}, 	 
        {name:"Ghost White",value:"#F8F8FF"}, 	 
        {name:"Gold",value:"#FFD700"}, 	 
        {name:"Golden Rod",value:"#DAA520"}, 	 
        {name:"Gray",value:"#808080"}, 	 
        {name:"Grey",value:"#808080"}, 	 
        {name:"Green",value:"#008000"}, 	 
        {name:"Green Yellow",value:"#ADFF2F"}, 	 
        {name:"Honey Dew",value:"#F0FFF0"}, 	 
        {name:"Hot Pink",value:"#FF69B4"}, 	 
        {name:"Indian Red",value:"#CD5C5C"}, 	 
        {name:"Indigo ",value:"#4B0082"}, 	 
        {name:"Ivory",value:"#FFFFF0"}, 	 
        {name:"Khaki",value:"#F0E68C"}, 	 
        {name:"Lavender",value:"#E6E6FA"}, 	 
        {name:"Lavender Blush",value:"#FFF0F5"}, 	 
        {name:"Lawn Green",value:"#7CFC00"}, 	 
        {name:"Lemon Chiffon",value:"#FFFACD"}, 	 
        {name:"Light Blue",value:"#ADD8E6"}, 	 
        {name:"Light Coral",value:"#F08080"}, 	 
        {name:"Light Cyan",value:"#E0FFFF"}, 	 
        {name:"Light Golden Rod Yellow",value:"#FAFAD2"}, 	 
        {name:"Light Gray",value:"#D3D3D3"}, 	 
        {name:"Light Grey",value:"#D3D3D3"}, 	 
        {name:"Light Green",value:"#90EE90"}, 	 
        {name:"Light Pink",value:"#FFB6C1"}, 	 
        {name:"Light Salmon",value:"#FFA07A"}, 	 
        {name:"Light Sea Green",value:"#20B2AA"}, 	 
        {name:"Light Sky Blue",value:"#87CEFA"}, 	 
        {name:"Light Slate Gray",value:"#778899"}, 	 
        {name:"Light Slate Grey",value:"#778899"}, 	 
        {name:"Light Steel Blue",value:"#B0C4DE"}, 	 
        {name:"Light Yellow",value:"#FFFFE0"}, 	 
        {name:"Lime",value:"#00FF00"}, 	 
        {name:"Lime Green",value:"#32CD32"}, 	 
        {name:"Linen",value:"#FAF0E6"}, 	 
        {name:"Magenta",value:"#FF00FF"}, 	 
        {name:"Maroon",value:"#800000"}, 	 
        {name:"Medium Aquamarine",value:"#66CDAA"}, 	 
        {name:"Medium Blue",value:"#0000CD"}, 	 
        {name:"Medium Orchid",value:"#BA55D3"}, 	 
        {name:"Medium Purple",value:"#9370D8"}, 	 
        {name:"Medium Sea Green",value:"#3CB371"}, 	 
        {name:"Medium Slate Blue",value:"#7B68EE"}, 	 
        {name:"Medium Spring Green",value:"#00FA9A"}, 	 
        {name:"Medium Turquoise",value:"#48D1CC"}, 	 
        {name:"Medium Violet Red",value:"#C71585"}, 	 
        {name:"Midnight Blue",value:"#191970"}, 	 
        {name:"Mint Cream",value:"#F5FFFA"}, 	 
        {name:"Misty Rose",value:"#FFE4E1"}, 	 
        {name:"Moccasin",value:"#FFE4B5"}, 	 
        {name:"Navajo White",value:"#FFDEAD"}, 	 
        {name:"Navy",value:"#000080"}, 	 
        {name:"Old Lace",value:"#FDF5E6"}, 	 
        {name:"Olive",value:"#808000"}, 	 
        {name:"Olive Drab",value:"#6B8E23"}, 	 
        {name:"Orange",value:"#FFA500"}, 	 
        {name:"Orange Red",value:"#FF4500"}, 	 
        {name:"Orchid",value:"#DA70D6"}, 	 
        {name:"Pale Golden Rod",value:"#EEE8AA"}, 	 
        {name:"Pale Green",value:"#98FB98"}, 	 
        {name:"Pale Turquoise",value:"#AFEEEE"}, 	 
        {name:"Pale Violet Red",value:"#D87093"}, 	 
        {name:"Papaya Whip",value:"#FFEFD5"}, 	 
        {name:"Peach Puff",value:"#FFDAB9"}, 	 
        {name:"Peru",value:"#CD853F"}, 	 
        {name:"Pink",value:"#FFC0CB"}, 	 
        {name:"Plum",value:"#DDA0DD"}, 	 
        {name:"Powder Blue",value:"#B0E0E6"}, 	 
        {name:"Purple",value:"#800080"}, 	 
        {name:"Red",value:"#FF0000"}, 	 
        {name:"Rosy Brown",value:"#BC8F8F"}, 	 
        {name:"Royal Blue",value:"#4169E1"}, 	 
        {name:"Saddle Brown",value:"#8B4513"}, 	 
        {name:"Salmon",value:"#FA8072"}, 	 
        {name:"Sandy Brown",value:"#F4A460"}, 	 
        {name:"Sea Green",value:"#2E8B57"}, 	 
        {name:"Sea Shell",value:"#FFF5EE"}, 	 
        {name:"Sienna",value:"#A0522D"}, 	 
        {name:"Silver",value:"#C0C0C0"}, 	 
        {name:"Sky Blue",value:"#87CEEB"}, 	 
        {name:"Slate Blue",value:"#6A5ACD"}, 	 
        {name:"Slate Gray",value:"#708090"}, 	 
        {name:"Slate Grey",value:"#708090"}, 	 
        {name:"Snow",value:"#FFFAFA"}, 	 
        {name:"Spring Green",value:"#00FF7F"}, 	 
        {name:"Steel Blue",value:"#4682B4"}, 	 
        {name:"Tan",value:"#D2B48C"}, 	 
        {name:"Teal",value:"#008080"}, 	 
        {name:"Thistle",value:"#D8BFD8"}, 	 
        {name:"Tomato",value:"#FF6347"}, 	 
        {name:"Turquoise",value:"#40E0D0"}, 	 
        {name:"Violet",value:"#EE82EE"}, 	 
        {name:"Wheat",value:"#F5DEB3"}, 	 
        {name:"White",value:"#FFFFFF"}, 	 
        {name:"White Smoke",value:"#F5F5F5"}, 	 
        {name:"Yellow",value:"#FFFF00"}, 	 
        {name:"Yellow Green",value:"#9ACD32"}
    ]

    const savedTitle = localStorage.getItem("title")
    const savedColor = localStorage.getItem("color")
    const savedSize = localStorage.getItem("size")

    const [color, updateColor] = useState(savedColor ? JSON.parse(savedColor) : {"glass" : colorList[10].value , "tea" : colorList[15].value, "bubble" : colorList[19].value})
    const [title, updateTitle] = useState(savedTitle ? savedTitle : "")
    const [size, updateSize] = useState(savedSize ? savedSize : 1)
    
    useEffect(() => {
        title ? document.title = title + " - Bubble Tea Generator" : document.title = "Bubble Tea Generator"
        localStorage.setItem("title",title)
    }, [title])

    useEffect(() =>
        localStorage.setItem("color",JSON.stringify(color))
    ,[color])

    useEffect(() =>
        localStorage.setItem("size", size)
    ,[size])

    return (
        <div className="row btg-main-row">
            <Sidebar colorList={colorList} currentColor={color} updateColor={updateColor} title={title} updateTitle={updateTitle} size={size} updateSize = {updateSize} />
            <Panel title={title} color={color} size={size} />
        </div>
      );
}

export default App;
