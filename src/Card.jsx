import React from 'react'

function Card(props) {
  // props is always passed in  the prenthesis of component 
    return (
        <>
          <section >
               <div className='card_wrapper'>
                  <img className='card_image' src={props.imgsrc} alt="wildlife"/>
                  <h4>{props.heading}</h4>
                  <h5>{props.name}</h5>
                  <button>{props.btn}</button>

               </div>
          </section>  
        </>
    )
}

export default Card
