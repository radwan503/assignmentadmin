import React from 'react';
import { FaMessage,FaBell } from "react-icons/fa6";
const RightContent = () => {
  return (
   <div id="rightContainer">
   <div className="user-info">
     <div className="icons">
       <FaBell/>
       <FaMessage />
     </div>
     <h4>Kelsey Miller</h4>
     <img src="https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp" alt="tennis" />
   </div>

   <div className="active-calories">
     <h1 className='section-title'>Active Calories</h1>
     <div className="calories-container">
     <div className="progress-bar">
        <progress value="85" min="0" max="100" style={{visibility:"hidden",height:0,width:0}}>85%</progress>
      </div>
       <div className="calories-content">
         <p><span>Today:</span> 400</p>
         <p><span>This Week:</span> 3500</p>
         <p><span>This Month:</span> 14000</p>
       </div>
     </div>
   </div>

   <div className="personal-bests">
       <h1 className='section-title'>Personal Bests</h1>
       <div className="personal-bests-container">
         <div className="single-item item1">
           <p>Fastest 5K Run: 22min</p>
           <img src="https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp" alt="" />
         </div>
         <div className="single-item item2">
           <p>Longest Distance Cycling: 4 miles</p>
           <img src="https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp" alt="" />
         </div>
         <div className="single-item item3">
           <p>Longest Roller-Skating: 2 hours</p>
           <img src="https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp" alt="" />
         </div>
       </div>
    </div>

   <div className="friends-activity">
     <h1>Friends Activity</h1>
     <div className="friends-container">
       <div className="single-card">
         <div className="card-user-info">
           <img src="https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp" alt="" />
           <h2>Jane</h2>
         </div>
         <img className="card-img" src="https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp" alt="" />
         <p>We completed the 30-Day Running Streak Challenge!🏃‍♀️🎉</p>
       </div>

       <div className="single-card card-two">
         <div className="card-user-info">
           <img src="https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp" alt="" />
           <h2>Mike</h2>
         </div>
         <img className="card-img" src="https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp" alt="" />
         <p>I just set a new record in cycling: 30 miles!💪</p>
       </div>
     </div>
   </div>
 </div>
  );
};

export default RightContent;
