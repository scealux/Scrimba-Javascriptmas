import React, { useState } from "react"

function Carousel({imgs}) {
    let [curImg, setCurImg] = useState(0)
    
    let newImgNum = (dir) => { //Returns the index of a photo based on a given direction
        if (dir) { //Forward
            return (curImg+1 < imgs.length ? curImg+1 : 0)
        } else { //Back
           return (curImg-1 >= 0 ? curImg-1 : imgs.length-1)
        }
    }
    
    let posClass = (index) => { //Returns a class identifying the photo's position
        if (index == newImgNum(0)) return "back"
        if (index == curImg) return "current"
        if (index == newImgNum(1)) return "forward"
        return ""
    };
    
    let images = imgs.map((el,i) => //Returns an array of images
            <img    key={i}
                    className={`card ${posClass(i)}`}
                    src={`./images/${el.url}`} alt={el.alt}
            />
        )
    
    return(
        <div className="container">
            <img    src="./images/previous.svg"
                    className="previous"
                    alt="previous image"
                    onClick={()=>setCurImg(newImgNum(0))}
            />
            <div className="gallery-wrapper">
                <div    className="gallery">
                    {images}
                </div>
            </div>
            <img    src="./images/next.svg"
                    className="next"
                    alt="next image"
                    onClick={()=>setCurImg(newImgNum(1))}
            />
        </div>
    )
}

export default Carousel
