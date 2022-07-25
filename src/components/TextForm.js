import React,{useState} from "react";


export default function TextForm(props){

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('success','Hurry!','Converted to UpperCase')

    }
    const handleloClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('success','Hurry!','Converted to LowerCase')
    }
    const handleCopyClick=()=>{
       let textField=document.getElementById('textField');
       textField.select();
       navigator.clipboard.writeText(textField.value);
       props.showAlert('success','Hurry!','Text Copied')

    }
    const handleSpacesClick=()=>{
      let newText=text.split(/[\s]+/);
      setText(newText.join(" "));
      props.showAlert('success','Hurry!','Spaces has been Removed');

    }

    const handleremClick=()=>{
        let newText="";
        setText(newText);
      props.showAlert('danger','Oppsy!','You have Cleared the text') 
    }
    
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    

    const[text,setText]=useState('');


    return(
        <>
            <h1 >{props.heading} <span className="badge bg-primary">by Shahzaib</span></h1>
            <div className="row my-3">
                <textarea className="form-control" id="textField" style={{backgroundColor: props.mode==='light'?'white':'#343a40',color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} placeholder="Enter Something" rows="5"></textarea>
            </div>
            <div className="mx-3 mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>To UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleloClick}>To LowerCase</button>   
             </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpacesClick}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleremClick}>Clear</button>
            </div>
            <hr/>
           
            <h2 >Text Summary</h2>
            <p>{text.split(/[\s\n]+/).filter((element)=> element.length!==0).length} Words & {text.split(/[\s\n]/).filter((element)=> element.length!==0).join("").length}Char</p>
            <p>{0.005*text.split(" ").filter((element)=> element.length!==0).length}Mins to Read this</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter Something to Preview here'}</p>
             
        </>
    )
}
