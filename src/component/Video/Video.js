import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import Videos from './VideoApi'
import './Video.css';
import ReactPlayer from 'react-player'
import '../../pages/indexPage.css'
import { FaAngleRight } from "react-icons/fa";
import VideoComponent from "./VideoComponent";
 
const Video = () => {
   
    const [show, setShow] = useState(false);

    const [currentVideo, setCurrentVideo] = useState(0);  
    const [count,setCount] = useState(1);  

        const handleShow = (index) => {
            setCurrentVideo(() => (index) % Videos.length);
            setCount(index + 1);
        }

        const handleNext = () => {
            setCurrentVideo(() => (currentVideo + 1) % Videos.length);
            setCount((currentCount) =>  count == Videos.length ? currentCount : currentCount + 1);
        }

        const handlePrevious = () => {
            setCurrentVideo(() => (currentVideo - 1) % Videos.length);
            setCount((currentCount) =>  count == 0 ?  currentCount : currentCount - 1);
        }
        
        console.log('current video',currentVideo)
        console.log('count video',count)

    return(
        <>
            <div className="video_page_section">
                <div className="container">
                    <div className="video_page_inner">
                        <div className="video_header d-flex justify-content-between">
                            <div className="button_one">
                                <NavLink to="/">Home</NavLink>
                            </div>
                        </div>
                        <div className="video_body">
                            <h1 style={{ marginBottom:"80px", fontWeight: 300 }} className="text-center mb-5 letters-spaced">INDEX</h1>
                            <div className="video_list">  
                               <VideoComponent Videos ={Videos} setShow={setShow} handleShow ={handleShow} />    
                                {
                                show && (
                                    <div id="myModal" className="mmodal">
                                        <div className="mmodal-content">
                                            <ReactPlayer
                                                url={Videos[currentVideo].videoLink}
                                                autoPlay={true}
                                                playing={true}
                                                width="100%"
                                                height="100%"
                                                controls={true}
                                                volume = {false}
                                                onEnded= { handleNext }
                                                playsinline
                                                webkitallowfullscreen="true"
                                                mozallowfullscreen="true"
                                            /> 
                                            { count != Videos.length && (
                                                <div className="player-next-container">
                                                    <div class="empty-left-container"></div>
                                                    <div className="right_icon" onClick={handleNext}><FaAngleRight/></div> 
                                                    <span onClick={()=>setShow(false)} className="mclose">&times;</span>
                                                </div>  
                                            )}
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}



export default Video   



 
 