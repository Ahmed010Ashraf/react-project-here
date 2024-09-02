import React, { useRef } from 'react'
import v1 from '../../assets/images/نصايح 1ث.mp4'
import "./player.css"
function Player({cont , setcont}) {

    let x = useRef()

    function close() {
        window.addEventListener("click" , function(e) {
            if(e.target == x.current){
                setcont(false)
            }
        })
    }


  return (
    <div ref={x} onClick={()=>close()} className={`player ${cont?"":"hide"}`}>
        <video  controls muted autoPlay src={v1}></video>
    </div>
  )
}

export default Player