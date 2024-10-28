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
                  <h1 style={{ marginBottom:"80px", fontWeight: 300 }} className="text-center mb-5">BOATS I HAVE SEEN</h1>
                  <div className="video_list">  
                  <div className="video_item" style={{padding: "0 13% 0 13%", color: 'white'}}> 
                     <h3 style={{ marginBottom:"20px", fontWeight: 200 }}>Artist Statement</h3>
                     <p>Boats I Have Seen (BIHS) is a collection of very short videos intended as meditations and escapism when either are needed with little time to spare.<br/><br/>
                        Made during a months-long visit through a winter in Seattle WA while living on a small houseboat on Lake Union, each video was filmed using a handheld iPhone X.<br/><br/>
                        A friend visited the houseboat and said I would need to write a novel while living there. I answered, writing a single page is torture enough. But the truth is he kindled a responsibility to create some aesthetic response of the experience. BIHS is it.<br/><br/>
                        The videos are unedited except for the front title and the fades.  They do not catalog the large numbers and types of boats to be seen in and around Seattle and its remarkable bodies of water. Their intentions are specific to the focus of stillness and movement. Each was made in place with that same reflection.<br/><br/>
                        You may find yourself here because you just like boats. That’s fine, too.
                        <br/>
                        <br/>
                        <em>
                            Joshua Wattles<br/>
                            joshuawattles@gmail.com<br/>
                            4/10/23
                        </em>
                        </p>
                  </div>                    
                  </div>
              </div>
          </div>
      </div> 
  </div>
</>
)
}


