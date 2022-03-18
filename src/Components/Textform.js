import { useState } from "react"
import React from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Upper Case!!","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lower Case!!","success");
    }

    const handleClearText = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("text Cleared !!","success");
    }
    const Capitalize = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        props.showAlert("Text Capitalized !!","success");
    }
    
    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard !!","success");
    }

    const [text, setText] = useState("")

    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'#042743' }}>
            <h1>{props.heading}</h1>
            <div className = "my-3">
            <textarea value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" id="myBox" rows="8" onChange={handleOnChange} ></textarea>
            <button className="btn btn-primary my-3 mx-1 " onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleClearText} >Clear Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={Capitalize} >Capitalize</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleCopy} >Copy Text</button>
            </div>
        </div>
        <div className="container" style={{color : props.mode==='dark'?'white':'#042743' }}>
            <h1>Text Summary Here</h1>
            <p>{text.split(" ").length} words {text.length} Characters</p>
            <p>{0.008 * text.split("").length } Minutes Taken</p>
            <h2>Preview:</h2>
            <p>{text}</p>
        </div>
        </>

    )
}


