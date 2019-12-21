import React from 'react'
import {Carousel} from '3d-react-carousal'
import Book from "../Data/Book"

function Slider (){
    
    let slides = [];
        Book.forEach((Book, index) => {
            slides.push(
              <img
                style={{ borderRadius: 7 }}
                display= "block"
          margin-left= "auto"
          margin-right= "auto"
                width="650" 
                height= "400"
                src={Book.imgurl}
                alt={index}
              />
            );
        });
    return <Carousel slides={slides}/>
    };

export default Slider