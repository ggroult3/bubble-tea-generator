import "../styles/NameSVG.css"

function NameSVG({title}){
    const component = title ? <svg className="btg-name-svg">
    <g id="text">
        <text x="100" y="50" font-family="cursive" font-variant="small-caps" font-size="40">{title}</text>
    </g>
</svg> : <svg className="btg-name-svg">
    <g id="text">
        <text x="100" y="50" font-family="cursive" font-variant="small-caps" font-size="40">Entrez un nom</text>
    </g>
</svg>
    return (
        component
    )
}

export default NameSVG