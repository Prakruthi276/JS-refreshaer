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
    const handleprocess = () => {
    let vowels = 0;
    let consonants = 0;
    let lowerText = text.toLowerCase();

    for (let i = 0; i < lowerText.length; i++) {
        let char = lowerText[i];
        if (/[a-z]/.test(char)) {
            if ("aeiou".includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
        setVowels(vowels);
        setConsonants(consonants);
    }

   
};

    const handleOnChange=(event)=>{
        setText(event.target.value);//here whenever the value is printed it is stored in the text area//

    }
    const[text,setText]=useState("");
    const[vowels,setVowels]=useState(0);
    const[consonants,setConsonants]=useState(0);

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn primary max=2" onClick={handleUpClick}>convert to upperCase</button>
        <button className="btn btn primary max=2" onClick={handlelowclick}>convert to lowerCase</button>
        <button className="btn btn primary max=2" onClick={handleprocess}>process text to see number of vowels and consonants</button>
        
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length } words and {text.length} characters</p>
       <p> {0.008*text.split(" ").length}  Minutes read</p>
       <p>priview</p>
       <p>{text.length>0?text:"enter something in the textbox to preview it here"}</p>
       <p>{vowels}and {consonants} </p>
       
    </div>
      
    </>
  );
}
