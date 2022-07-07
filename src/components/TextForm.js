import React, {useState} from 'react'

export const TextForm = (props) => {

    const handleUpclick = () =>{
        console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoclick = () =>{
        console.log("Lowercase was clicked" + text);
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase","success");

    }
    const handleClearclick = () =>{
        console.log("Lowercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is Cleared", "success");
    }

    const handleCopy = () =>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        // the below line code removes all the selection the blue highlight comes.
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied", "success");
    }

    const handleExtraSpaces = () =>{
        // The split works when their is more then one space because after split it will creat array adn in the next line we are joining the text
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra Space have been removed", "success");
    }

    const handleChCaseClick = () =>{
        console.log("handleChCaseClick was clicked" + text);
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) === text.charAt(i).toLowerCase()) {

                newText += text.charAt(i).toUpperCase();
                
            } else {

                newText += text.charAt(i).toLowerCase();
                
            }
            
        }
        setText(newText);
    }

    // Allow us to change the text in the text area where event is used to listen and we are able to type
    const handleOnChange = (event) =>{
        console.log("handleOnChange is clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here");
    // text = 'new string' Wrong way ro cahnege the state
    // setText("new Text") //correct way to set the text

    return (
        <>
        <div className="container" style= {{color: props.mode === 'dark'?'white':'#05354b'}} >
            <h1> {props.heading} </h1>
            <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?' rgb(71 188 203)':'white', color: props.mode=== 'dark'?'white':'#05354b' }} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handleUpclick} >Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handleLoclick} >Convert to LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handleClearclick} >Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handleChCaseClick} >Change Case of Letters</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces} >Remove Extra Spaces</button>


        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#05354b'}}>
            <h1>Your Text Summary is </h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            {/* <p>{text}</p> */}
            <p>{text.length>0?text:"Nothing to Preview!"}</p>

        </div>
        </>
    )
}
