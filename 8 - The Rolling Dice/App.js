import React, {useState, useEffect} from "react"
import Die from "./Die"

function App() {
    let randNum = () => Math.floor( (Math.random()*6) + 1 ) 
    
    let [dice, setDice] = useState([randNum()])
    
    
    
    let changeDiceNum = (dir) => {
        if (dir) {
            setDice((prev) => [...prev, randNum()])
        } else {
            if (dice.length !== 1) {
                setDice((prev) => prev.slice(0,prev.length-1))
            }
        }
    }
    
    let diceElements = () => dice.map((el, i) => <Die roll={el} key={i}/>)
    
    let rollDice = () => {
        setDice( prev => prev.map(el => randNum() ) )
    }
    return(
        <>
            <h1> Click the dice to roll!</h1>
            <div className="diceNumber">
                <button className="plus" onClick={()=>changeDiceNum(0)}> - </button>
                    <div>{dice.length}</div>
                <button className="minus" onClick={()=>changeDiceNum(1)}> + </button>
            </div> 
            <div className="diceContainer" onClick={()=>rollDice()}>
                {diceElements()}  
            </div>
            <div className="total">( Total: {dice.reduce((ac, el) => ac + el)} )</div>
        </>
    )
}

export default App