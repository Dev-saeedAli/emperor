import React, { useState } from 'react'
import "../../src/GalleryComponent/Gallery.css"
import galleryImages from "../gallery"
import {AiOutlineClose} from "react-icons/ai" 


function Gallery() {
    const [model, setModel] = useState(false);
    const [tempImage, setTempImage] = useState("");

    const handleClick=(img)=>{
        setTempImage(img)
        setModel(true)
    }

    const imageGallery  = galleryImages.map((item, index) =>{
        return (
                 <div className="images" key={index}>
                <img onClick={()=> handleClick(item.img)} src={item.img} alt="gallery" />
                </div>
        )
    }) 
  return (
    <div className='gallery-container'>
        <div className="gallery-header">
            <h3>Everyone Loves<br/>Image Gallery</h3>
            <p>Choosing car wash is a constant process <br/>in the life of every motorist.We <br/>try to give you only positive emotions.<br/>Entrust your car cleaning to our professionals.</p>
        </div>
        <div className={model ? "modelOpen" : "preview"}>
            <img src={tempImage} alt="gallery" />
            <AiOutlineClose onClick={()=> setModel(false)}/>
        </div>
        <div className="image-gallery">
           {imageGallery}
        </div>
    </div>
  )
}

export default Gallery
