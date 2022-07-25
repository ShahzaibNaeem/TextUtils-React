import React from 'react'

export default function AboutUs(props) {
    // const [myStyle,setStyle]=useState({
    //     color: 'black',
    //     backgroundColor:'white'
    // });
    // const [myBtn,setBtnStyle]=useState('Enable dark Mode');
    // const [myBtnColor,setBtnColor]=useState('btn btn-dark my-3');


    // const toggleStyle=()=>{
    //     if(myStyle.color==='white'){
    //         setStyle({
    //         color :'black',
    //         backgroundColor:'white'
    //         })
    //    setBtnStyle('Enable Dark Mode');
    //    setBtnColor('btn btn-dark my-3');
    //     }
    //     else{
    //         setStyle({
    //             color :'white',
    //             backgroundColor:'black'
    //              })
    //    setBtnStyle('Enable Light Mode');
    //    setBtnColor('btn btn-light my-3');


    //     }
    // }

  return (
    <>
    <div className="container" >
        <h2>About Us</h2>
      <div className="accordion"  id="accordionExample" >
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}}  type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze Your Text
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body"  style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}}>
            <strong>Analyze Your Text with TextUtils.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Browser Compatible
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}}>
            <strong>Compatible with all browsers.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Free to Use
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}}>
            <strong>Every Feature is free to use.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>

  {/* <div className="container">
  <button className={myBtnColor} onClick={toggleStyle}>{myBtn}</button>
  </div> */}
  </div>
    </>
  )
}
