import React,{useEffect, useState } from 'react';

import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import "./indexPage.css"
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom';
import Videos from '../component/Video/VideoApi';

import Modal from 'react-bootstrap/Modal';

let playVideos = Videos.map((vid) => vid.videoLink);

let randomItems;
 
export default function IndexPage() {
    const [randomUrl, setRandomUrl] = useState();
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    useEffect(()=>{
    
    },[randomUrl])

    const handleShow = () => {
      const randIndex = Math.floor(Math.random() * playVideos.length);
      randomItems = playVideos[randIndex];
      playVideos = [...playVideos.slice(0, randIndex), ...playVideos.slice(randIndex + 1)];
      
      setRandomUrl(randomItems)
      }

      console.log('unique url',randomUrl)
      const  refreshPage =()=>{ 
        window.location.reload();  
      }
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center button_one position-relative' style={{ height:"80vh" }}>
          <h1 style={{ marginBottom:"80px", fontWeight: 300 }} className="text-center ">BOATS I HAVE SEEN</h1>
          <div className="d-flex align-items-center justify-content-center"> 
          <a type='button' class='play-button' onClick={()=>{setShow(true); handleShow()}}>Play Random</a>
          <NavLink to='/index' className="ms-4">Index</NavLink>
          </div>

      <NavLink to='/statement' className="self_item_statement">Statement</NavLink>
      {/* <NavLink  className="self_item_statement" onClick={() => { setModalShow(true)}}>Statement</NavLink> */}
    </div>
    <MyVerticallyCenteredModal  show={modalShow}  onHide={() => setModalShow(false)} />  
  {
    show && (
      <div id="myModal" className="mmodal">
      
    <div className="mmodal-content">
      {
        randomUrl !== undefined && <div>
          <div className="left_icon" onClick={handleShow}><FaAngleLeft/></div>
        <div className="right_icon" onClick={handleShow}><FaAngleRight/></div>
         </div> 
      }
    <span onClick={()=>setShow(false)} className="mclose">&times;</span>
    {
      randomUrl !== undefined ? <ReactPlayer
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
        <h1
        style={{
          color: "white",
        }}>Thanks for watching!</h1>
        {/* <button
          style={{ 
            background: "transparent",
            border: "2px solid white",
            // borderRadius: "10px",
            padding: "6px 38px",
            marginTop: "10px",
            color: "white",
           }}
          onClick={refreshPage}>Close
         </button> */}
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
        <Modal.Title id="contained-modal-title-vcenter"> </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="video_item" style={{padding: "0 5% 0 5%"}}> 
                <h3>Artist Statement</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempora iure placeat suscipit recusandae deleniti nesciunt repellendus sapiente deserunt architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas repudiandae adipisci aliquam deleniti voluptatibus at, sint soluta sunt animi eveniet nam. Voluptatibus vel animi ab modi nostrum doloribus exercitationem!</p>
        </div>
      </Modal.Body> 
  </Modal>
  )
}