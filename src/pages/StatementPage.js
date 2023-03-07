import React,{useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import "./indexPage.css"

export default function StatementPage() {
  
return (
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
                  <h1 className="text-center mb-5">BOATS I HAVE SEEN</h1>
                  <div className="video_list">  
                  <div className="video_item" style={{padding: "0 5% 0 5%", color: 'white'}}> 
                     <h3>Artist Statement</h3>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempora iure placeat suscipit recusandae deleniti nesciunt repellendus sapiente deserunt architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas repudiandae adipisci aliquam deleniti voluptatibus at, sint soluta sunt animi eveniet nam. Voluptatibus vel animi ab modi nostrum doloribus exercitationem!</p>
                  </div>                    
                  </div>
              </div>
          </div>
      </div> 
  </div>
</>
)
}


