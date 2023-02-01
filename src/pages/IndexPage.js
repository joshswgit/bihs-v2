import React,{useEffect, useState } from 'react'

import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import "./indexPage.css"
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom';
import Videos from '../component/Video/VideoApi';


import Modal from 'react-bootstrap/Modal';

let vidieos = [
              Videos[0].videoLink,
              Videos[1].videoLink,
              Videos[2].videoLink,
              Videos[3].videoLink,
            ]

 let randomeItemsss
 
export default function IndexPage() {
    const [randomUrl, setRandomUrl] = useState();
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    useEffect(()=>{
    
    },[randomUrl])

    const handleShow = () => {
      const randIndex = Math.floor(Math.random() * vidieos.length);
      randomeItemsss = vidieos[randIndex];
      vidieos = [...vidieos.slice(0, randIndex), ...vidieos.slice(randIndex + 1)];
      
      // if(vidieos.length > 0 ){
      //   vidieos.includes(randomeItemsss)
      // }
      setRandomUrl(randomeItemsss)
      }

      console.log('unique url',randomUrl)
      const  refreshPage =()=>{ 
        window.location.reload(); 
      }
  return (
    <>

<h1 style={{ marginTop:"100px" }} className="text-center">BOATS I HAVE SEEN</h1>
    <div className='d-flex align-items-center justify-content-center button_one position-relative' style={{ height:"70vh" }}>
            <a type='button' onClick={()=>{setShow(true); handleShow()}}>PLAY</a>
      <NavLink to='/index' className="ms-4">INDEX</NavLink>
      <NavLink  className="self_item_statement" onClick={() => { setModalShow(true)}}>STATEMENT</NavLink>

    </div>
    <MyVerticallyCenteredModal  show={modalShow}  onHide={() => setModalShow(false)} />  
  {
    show && (
      <div id="myModal" className="mmodal">
      
    <div className="mmodal-content">
      {
        randomUrl != undefined && <div>
          <div className="left_icon" onClick={handleShow}><FaAngleLeft/></div>
        <div className="right_icon" onClick={handleShow}><FaAngleRight/></div>
         </div> 
      }
    <span onClick={()=>setShow(false)} className="mclose">&times;</span>
    {
      randomUrl != undefined ? <ReactPlayer
      url={randomUrl}
      autoPlay={true}
      playing={true}
      width="100%"
      height="100%"
      controls={true}
      volume = {false}
      onEnded= {handleShow}
      playsinline
      />
      : 
      <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
        <h1>REFRESH TO START AGAIN</h1>
        <button
          style={{ 
            background: "transparent",
            border: "2px solid #777",
            borderRadius: "10px",
            padding: "6px 38px",
            marginTop: "10px"
           }}
         onClick={refreshPage}>REFRESH</button>
        </div>
    }
  </div>
  </div>
    )
  }
    </>
  )
}

// Modal
function MyVerticallyCenteredModal(props) {
    
  return(
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
  >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter"> 
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="video_item"> 
              <h3>Statements</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempora iure placeat suscipit recusandae deleniti nesciunt repellendus sapiente deserunt architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas repudiandae adipisci aliquam deleniti voluptatibus at, sint soluta sunt animi eveniet nam. Voluptatibus vel animi ab modi nostrum doloribus exercitationem!</p>
      </div>
      </Modal.Body> 
  </Modal>
  )

}



// import React, { useRef } from 'react';
// import VimeoPlayer from 'vimeo-player';

// function MyComponent() {
//   const playerRef = useRef(null);

//   const randomUrl = "https://vimeo.com/videoId";

//   const playNextVideo = () => {
//     playerRef.current.loadVideo(randomUrl);
//     playerRef.current.play();
//   }

//   return (
//     <div>
//       <VimeoPlayer
//         ref={playerRef}
//         video={randomUrl}
//         autoplay={true}
//         onEnded={playNextVideo}
//       />
//     </div>
//   );
// }

// export default MyComponent;
