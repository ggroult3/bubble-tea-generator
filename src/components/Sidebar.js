import Header from "./Header"
import Menu from "./Menu"
import "../styles/Sidebar.css"

function Sidebar({colorList,currentColor,updateColor,title,updateTitle,size,updateSize}) {
    return(
        <div className="col-sm-4 btg-side-bar">
            <Header />
            <Menu colorList={colorList} currentColor={currentColor} updateColor={updateColor} title={title} updateTitle={updateTitle} size={size} updateSize={updateSize} />
        </div>
    )
}

export default Sidebar