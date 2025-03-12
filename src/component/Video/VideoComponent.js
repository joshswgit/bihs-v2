import React from 'react'
import { useEffect, useState } from 'react'

function VideoComponent({ Videos, setShow, handleShow }) {

    const [startVideo, setStartVideo] = useState(1)
    const [totalVideo, setTotalVideo] = useState(0)

    useEffect(()=> {
        const totalVideo = Math.ceil(Videos?.length / 5)
        setTotalVideo(totalVideo)
    }, [])

  return (
    <>
        <div style={{ display:'flex', justifyContent:"center", gap: "20px"}}>
            {[1,2,3,4,5].map((item, index) => 
                <RepeatedVideo
                    Videos ={Videos}
                    setStartVideo ={setStartVideo}
                    index ={index}
                    item ={item}
                    setShow={setShow}
                    startVideo={startVideo}
                    totalVideo={totalVideo}
                    handleShow ={handleShow} 
                /> 
            )}
        </div>
    </>
  )
}

export default VideoComponent

function RepeatedVideo({Videos,setShow,handleShow,index,item,setStartVideo,totalVideo, startVideo}) {
    return (
        <div key = {index} style={{ display:'flex', width:'10%', flexDirection:'column', alignItems: 'center', gap: "15px"}}> 
                {
                    Videos.slice(totalVideo*(index), totalVideo*(index + 1)).map( (vid, index) => { 
                        return (
                            <>
                                <p key={index}>
                                    <span style={{ cursor:"pointer", fontSize: "20px" }} onClick={ ()=>{
                                        setShow(true); handleShow(vid.id - 1)
                                    }}>
                                        {vid.name}
                                    </span>
                                </p>                                         
                            </>                                  
                        )
                    })
                }  
        </div>
    )
}