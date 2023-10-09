import React from 'react'
import Form from './Form'

export default function Card(){
  return(
    <div className="container">

      <div className="left">

        <div className="front">
          <div className="ellipse">
            <div className="ellipse1"></div>
            <div className="ellipse2"></div>
            <div className="ellipse3"></div>
            <div className="ellipse4"></div>
            <div className="ellipse5"></div>
            <div className="ellipse6"></div>
            <div className="ellipse7"></div>
          </div>
          
        </div>

        <div className="back">
          <div className="rectangle5"></div>
          <div className="rectangle6"></div>
        </div>

      </div>

      <div className="right">
        <Form/>
      </div>
    </div>
  )
}