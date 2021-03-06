function Shadow({color}){
    return (
        <g id="shadow">
            <path opacity="0.24" fill="#FFFFFF" d="M55.6,176.4L55.6,176.4c-12-1.1-21.7-10.6-23-22.8l-8.6-82
                c3.8,1.4,7.6,2.7,11.3,3.7c1.7,0.5,3.4,0.9,5.1,1.3h0C40.5,76.6,35.3,148.5,55.6,176.4z"/>
            <path opacity="0.62" fill={color} d="M109.1,71.7l-8.9,81.9c-1.4,13-12.3,22.9-25.4,22.9l-2.3,0
                c12.7-14.4,13.8-53.1,11.6-98.4C92.5,76.8,100.8,74.7,109.1,71.7z"/>
        </g>

    )
}

export default Shadow