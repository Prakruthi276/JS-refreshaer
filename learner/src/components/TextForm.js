import React ,{useState} from 'react';//importing the usestate here//


export default function TextForm(props) {
    const handleUpClick=()=>{
        
        let newText=text.toUpperCase();//here the caps are stored and placed in the newtext//
        setText(newText);


    }
    const handlelowclick=()=>{
        
        let newText=text.toLowerCase();//here the caps are stored and placed in the newtext//
        setText(newText);


    }
    const handleOnChange=(event)=>{
        setText(event.target.value);//here whenever the value is printed it is stored in the text area//

    }
    const[text,setText]=useState("");

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn primary max=2" onClick={handleUpClick}>convert to upperCase</button>
        <button className="btn btn primary max=2" onClick={handlelowclick}>convert to lowerCase</button>
        
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length } words and {text.length} characters</p>
       <p> {0.008*text.split(" ").length}  Minutes read</p>
       <p>priview</p>
       <p>text</p>
       
    </div>
      
    </>
  );
}
