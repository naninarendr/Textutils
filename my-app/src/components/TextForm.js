import React, {useState} from 'react'

export default function TextForm(props) {
    const [Text,setText]=useState('')

    const Uphandle=()=>{
        console.log("Upper case was changed");
        let newText=Text.toUpperCase();
        setText(newText);
        props.showalert("converted to uppercase","success")
    }

    const Lohandle=()=>{
        console.log("lower case was changed");
        let newText=Text.toLowerCase();
        setText(newText);
         props.showalert("converted to lowercase","success")
    }

    const Cahandle=()=>{
        console.log("Captializaed case was changed");
        let newText=Text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
        setText(newText);
         props.showalert("converted to captialize","success")
    }

    const cle=()=>{
        console.log("Text was cleared");
        let newText="";
        setText(newText);
         props.showalert("Text is cleared","success")
    }

    const UpChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
          <textarea className="form-control" value={Text} onChange={UpChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
       </div>
       <button className="hello mx-1" onClick={Uphandle} >convert to uppercase</button>
       <button className="hello mx-1" onClick={Lohandle} >convert to Lowercase</button>
       <button className="hello mx-1" onClick={Cahandle} >convert to Captializedcase</button>
       <button className="hello mx-1" onClick={cle} >clear</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>Your Text summary</h2>
        <p>{Text.split(" ").length?Text.split(" ").length:""} words and {Text.length?Text.length:""} characters</p>
        <p>{0.008 * Text.split(' ').length?0.008 * Text.split(' ').length:''} Minutes to read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:'enter something to preview it.'}</p>
    </div>
    </>



  )
}
