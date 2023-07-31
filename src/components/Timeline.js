import React from 'react';
import defaultImg from '../assets/defaultpic.png';
import timelinePst from '../assets/whatsapp.jpg'
import menuIcons from '../assets/menuicon.png'

function Timeline() {
  return (
    <div>

<div className="post-item">
                      
    <div className="post-loop">
        <div className="post-header">
            <div className="icon-link">
                    <div className="post-icon">  
                        <a href="/profile/lazystu">
                            <img src={defaultImg} className="profile-img" alt=''/> </a>
                    </div>

                    <div className="profile-det">
                        <span className="post-user-link"><a href="/profile/lazystu">
                            martins bussines                     
                            
                        </a>
                             <form className="post-followers-form" action="/follow" method="POST">
                                  <input type="hidden" name="csrfmiddlewaretoken" value="iSNHLsATn1W3rFPtkreUCWSnGttq3Z0ANenTiu1nTAjbXjmVtHDN2CyHwxqDpK4f" />
                                      <input type="text" name="user-id" id="user-id" value="lazystu" hidden/>
                                      <button id="post-followers-form" className="follow-button" type="submit">Follow</button>
                              </form>
                 
                        </span>
                        <span className="post-user-link2"><a href="/profile/lazystu">@lazystu
                            
                        </a>
                            </span>
                    </div>
            </div>

            <div class="drop">
            <img src={menuIcons} alt="menuicon" />
            </div>
        
        </div> 
        <div class="description">
            <p>i lolve with the sport read more...</p>
        </div>    
        <div className="image-container">
                                        
            <a style={{borderRadius: "42px"}} href={timelinePst}>  
                
                <img className="post-image" src={timelinePst} alt="First-Img" />
              
            </a>
        </div> <hr/>
        <div className="activity-button"> 
            <div className="top-activity">
                <div className="like-comment">
                    <button onclick="likePost('8c7e5b88-e0f1-4c08-aa85-4270f2a04440')" id="like-button" style={{backgroundColor: "transparent", border: "none"}} className="like-button">
                      <div className="like">
                        
                        <svg style={{color: "black"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="25" height="25" className="">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                        </svg>
                        
                      </div>
                    </button>
                    
                    <a href="/chats?curruser=wizzyalex&amp;post_user=lazystu" className="comment-button">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="25" height="25" class="">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        
                    </a>
                    
                  </div>

                <div className="price">
                    <a className="price-link" href='/'>Item Price: N 20,000</a>
                </div>

            </div>
            <div className="liked-b"> 

                <div className="">
            </div>
            </div>
            <div className="liked-by">          
                1 like
            </div>

            <p className="caption">
            <a href="/profile/lazystu"><strong>lazystu: </strong></a>keep going
        </p>

            <div className="post-comment">
                <img src={defaultImg} className="profile-img-edit" alt='profile-img'/>
                <form action="" method="POST">
                    <input type="hidden" name="csrfmiddlewaretoken" value="iSNHLsATn1W3rFPtkreUCWSnGttq3Z0ANenTiu1nTAjbXjmVtHDN2CyHwxqDpK4f"/>
                    <input type="hidden" name="postid" id="postid" value="8c7e5b88-e0f1-4c08-aa85-4270f2a04440"/>
                <input type="text" placeholder="post a comment ..." className="main-comment" name="main-comment"/>
                <div className="post-comment-icons">
                    <a href="/"> <i class="uil-image"></i></a>
                    <a href="/"> <i class="uil-video"></i></a>
                </div>
                <button type="submit" hidden>post</button>
            </form>

            </div>
            
            
            <p><strong>ricardoblinks</strong> Yooo</p>
            
            
            
            <p><strong>ricardoblinks</strong> Yooo</p>
            
            
            
            <p><strong>ricardoblinks</strong> Yooo</p>
            
            
            
            <p><strong>ricardoblinks</strong> Yooo</p>
            
            
            
            <p><strong>lazystu</strong> buy buy buy</p>
            
            

        </div>

    </div>
    <p></p>

</div>

    </div>
  )
}

export default Timeline