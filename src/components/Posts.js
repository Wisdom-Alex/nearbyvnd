import React from 'react';
import defaultImg from '../assets/defaultpic.png'
import Timeline from './Timeline';


const Posts = () => {
  return (
    <div>
      <div className="post-content">
      <div className="create-post">
                        <div class="top">
                                <div className="profile-img-container">  
                                <a href="{}">
                                    <img src={defaultImg} alt='profile' class="profile-img" />
                                </a>    
                                </div>
                            <div class="create-content">
                                <input type="text" onclick="showForm()" readonly="" placeholder="create a post ..." className="bg-transparent max-h-10 shadow-none" />
                                <a href="{}"> <i className="uil-image"></i></a>
                                                                        
                            </div>    
                        </div>
                   
      </div>
      <Timeline/>
      </div>
    </div>
  )
}

export default Posts