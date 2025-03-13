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
                  <h1 style={{ marginBottom:"80px", fontWeight: 300 }} className="letters-spaced text-center mb-5">BOATS I HAVE SEEN</h1>
                  <div className="video_list">  
                  <div className="video_item" style={{padding: "0 13% 0 13%", color: 'white'}}> 
                     <h3 style={{ marginBottom:"20px", fontWeight: 200 }}>Artist Statement</h3>
                     <p>
                        Boats I Have Seen (BIHS) is a collection of 112 very short videos to be used as meditations as
                        much as they are pleasant, perhaps calming, to see.
                    </p>
                    <br/>
                    <p>
                        Made during a months-long visit through a winter in Seattle WA while living on a small
                        houseboat on Lake Union, their intentions are specific: stillness and movement. Each was made
                        in place with that same reflection, filmed using an iPhone X, and handheld to convey presence.
                    </p>
                    <br/>
                    <p>
                        A friend visited the houseboat and said I would need to write a novel while living there. I
                        answered: writing a single page is torture enough. But the truth is he kindled a responsibility to
                        create some aesthetic response of the experience. BIHS is this.
                    </p>
                    <br/>
                    <p>
                        You may find yourself here because you just like boats or water or Seattle. That’s fine, too.
                    </p>
                    <br/>
                    <p>
                        The videos are unedited except for the front title and the fades. They do not try to catalog the
                        large numbers and types of boats to be seen in and around Seattle and its remarkable bodies of
                        water.
                    </p>
                    <br/>
                    <p>
                        Joshua Wattles<br/>
                        joshuawattles@gmail.com<br/>
                        March, 2025
                    </p>
                    <br />
                    <br />
                    <p>
                        NB: While the viewer can select a single video using the Index function, either the Random or
                        the Index choice will provide a continuous stream pulled from the collection pausing briefly
                        between scenes.
                    </p>
                    <br />
                    <p className="statement-nb">
                        My thanks to Andrew Delmar, Andre Bautista and Scott Power for their contributions to the
                        web display of this project.
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


