import React from 'react';
import defaultImg from '../assets/defaultpic.png';


function Marketers() {
  return (
    <div>
     <div class="follower">
                    <div className="follower-feeds">

                        <div className="users-title">
                            <h2 className="">Markets Near You</h2>
                            <a href="/"> Refresh</a>
                        </div> 
                       
                        <div class="followers-content">  
                            <div class="followers-item">
                                <div class="followers-content-item">
                                    <a href="/profile/lazystu/">
                                        <img src={defaultImg} className="profile-img-edit img-edit" alt='profile-img-edit'/>
                                    </a>
                                    <div class="users-info">
                                        <div class="name-follow">
                                            <h5>martins bussines          
                    
                                            </h5> 
                                            <form className="post-followers-form" action="/follow" method="POST">
                                                <input type="hidden" name="csrfmiddlewaretoken" value="iSNHLsATn1W3rFPtkreUCWSnGttq3Z0ANenTiu1nTAjbXjmVtHDN2CyHwxqDpK4f"/>
                                                    <input type="text" name="user-id" id="user-id" value="lazystu" hidden/>
                                                    <button style={{border: "none"}} class="follow-button" type="submit">Follow</button>
                                            </form>
                                        </div>

                                        <span className="username"> @lazystu </span>
                                        <span className=""> 320k followers </span>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                    </div>
                </div>
    </div>
  )
}

export default Marketers