import React from 'react'
import { useEffect, useState } from 'react'

function VideoComponent({Videos,setShow,handleShow}) {

    const [startVideo, setStartVideo] = useState(1)
    const [totalVideo, setTotalVideo] = useState(0)

    useEffect(()=> {
        const totalVideo = Math.ceil(Videos?.length / 5)
        setTotalVideo(totalVideo)

    }, [])

  return (
    <>
    {/* <p>Total video: {totalVideo*1} </p>
    <p>Start video: {startVideo*2} </p>
    <p>Video Length: {Videos?.length} </p> */}
            <div style={{ display:'flex', }}>
            {[1,2,3,4,5].map((item, index) => <RepetedVideo
                                                     Videos ={Videos}
                                                     setStartVideo ={setStartVideo}
                                                     index ={index}
                                                     item ={item}
                                                    setShow={setShow}
                                                    startVideo={startVideo}
                                                    totalVideo={totalVideo}
                                                    handleShow ={handleShow} /> )}
            </div>
    </>
  )
}

export default VideoComponent



function RepetedVideo({Videos,setShow,handleShow,index,item,setStartVideo,totalVideo, startVideo}) {

    useEffect(() => { 
            // setStartVideo((startVideo) => startVideo + totalVideo)
    }, [])
    return (
        <div key = {index} style={{ display:'flex', width:'20%', 
                    flexDirection:'column' }}> 
                    {/* <p>startVideo:{startVideo} index {index}  </p> */}
                        {
                            Videos.slice(totalVideo*(index), totalVideo*(index+1)).map( (vid, index) => { 
                                return (
                                    <>
                                        <p key={index}>
                                            <span style={{ cursor:"pointer" }} onClick={ ()=>{
                                                setShow(true); handleShow(index)
                                            }}>{vid.name}</span>
                                        </p>  
                                        
                                    </>
                                    
                                )
                            } )
                        }  
            </div>
            )
        }