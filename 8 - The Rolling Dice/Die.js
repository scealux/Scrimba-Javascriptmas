import React from "react"

function Die({roll}) {
    return (
        <div className="die">
            <div className={`face f-${roll}`}>
                <div className="dot d1"></div>
                <div className="dot d2"></div>
                <div className="dot d3"></div>
                <div className="dot d4"></div>
                <div className="dot d5"></div>
                <div className="dot d6"></div>
            </div>
        </div>
    )
}

export default Die