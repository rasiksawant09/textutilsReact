// import React, {useState} from 'react'
import React from 'react'


// let myStyle = {
//     color: 'white',
//     backgroundColor: "black"
// }

export const About = (props) => {

    let myStyle = {
        color: props.mode === "dark"?"white":"#05354b",
        backgroundColor: props.mode === "dark" ? "rgb(79 137 164)":"white",
        border: '2px white',
        borderColor: props.mode === "dark" ? "white": "#05354b"
    }
    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: "black",
       
    // })
    
    // const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = () =>{
    //     if(myStyle.color === 'white'){
    
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: "white",
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Dark mode")
            
    //     }
    
    //     }
    return (
        <div className="container" style={{color: props.mode === "dark"?"white":"#05354b"}}>
            <h1 className="my-4">About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your text quickly.</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils give you a way to analyze your text quickly and efficently. Be it word count or character count.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count and work count statistics for a given text. TextUtils reports the 
                number of words and characters. thus it is suitable for writing text wirh word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser Compatiblity.</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This software works on any web browser such as Chrome, FireFox, Internet Explorer, Safari, opera. It suits to count
                charcters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>

        {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-4"> {btntext} </button> */}

        </div>
    )
}
