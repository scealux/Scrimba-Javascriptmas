import React, { useState } from "react"

import Carousel from "./Carousel"

function App() {
    let imgArray = [
        {url: "candycane.jpg", alt: "Woman holding a present wrapped in candycane wrapping paper"},
        {url: "cookies.jpg", alt: "Cookies on a marble countertop"},
        {url: "presents.jpg", alt: "A few festive presents"},
        {url: "reindeer.jpg", alt: "Reindeer towing a sled in a snowy forest"},
        {url: "santa.jpg", alt: "Santa on skis with other festive characters on snowboards"},
    ]
    
    return(
        <Carousel imgs={imgArray}/>
    )
}

export default App
