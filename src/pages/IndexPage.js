import React,{useEffect, useState } from 'react'

import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import "./indexPage.css"
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom';
import Videos from '../component/Video/VideoApi';


import Modal from 'react-bootstrap/Modal';

let playVideos = [
              Videos[0].videoLink,
              Videos[1].videoLink,
              Videos[2].videoLink,
              Videos[3].videoLink,
              Videos[4].videoLink,
              Videos[5].videoLink,
              Videos[6].videoLink,
              Videos[7].videoLink,
              Videos[8].videoLink,
              Videos[9].videoLink,
              Videos[10].videoLink,
              Videos[11].videoLink,
              Videos[12].videoLink,
              Videos[13].videoLink,
              Videos[14].videoLink,
              Videos[15].videoLink,
              Videos[16].videoLink,
              Videos[17].videoLink,
              Videos[18].videoLink,
              Videos[19].videoLink,
              Videos[20].videoLink,
              Videos[21].videoLink,
              Videos[22].videoLink,
              Videos[23].videoLink,
              Videos[24].videoLink,
              Videos[25].videoLink,
              Videos[26].videoLink,
              Videos[27].videoLink,
              Videos[28].videoLink,
              Videos[29].videoLink,
              Videos[30].videoLink,
              Videos[31].videoLink,
              Videos[32].videoLink,
              Videos[33].videoLink,
              Videos[34].videoLink,
              Videos[35].videoLink,
              Videos[36].videoLink,
              Videos[37].videoLink,
              Videos[38].videoLink,
              Videos[39].videoLink,
              Videos[40].videoLink,
              Videos[41].videoLink,
              Videos[42].videoLink,
              Videos[43].videoLink,
              Videos[44].videoLink,
              Videos[45].videoLink,
              Videos[46].videoLink,
              Videos[47].videoLink,
              Videos[48].videoLink,
              Videos[49].videoLink,
            ]

 let randomItems
 
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

<h1 style={{ marginTop:"80px" }} className="text-center">BOATS I HAVE SEEN</h1>
    <div className='d-flex align-items-center justify-content-center button_one position-relative' style={{ height:"70vh" }}>
            <a type='button' class='play-button' onClick={()=>{setShow(true); handleShow()}}>Play</a>
      <NavLink to='/index' className="ms-4">Index</NavLink>
      <NavLink  className="self_item_statement" onClick={() => { setModalShow(true)}}>Statement</NavLink>

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