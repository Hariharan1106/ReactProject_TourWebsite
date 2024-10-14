import { useState } from 'react'
import img1 from './assets/img1.svg'
import navbar from "./assets/navbar.svg"
import word from "./assets/word.svg"
import img2 from "./assets/img2.svg"
import comma from "./assets/comma.svg"
import img3 from "./assets/img3.svg"
import word1 from "./assets/word1.svg"
import Rectangle from "./assets/Rectangle 43.svg"
import Group from "./assets/Group 89.svg"
import img4 from "./assets/img4.svg"
import img5 from "./assets/img5.svg"
import './App.css';

function App() {
  

  return (
    <div>
      <div className="header">
        <img src={navbar} className='navbar' alt='No image found' />
      </div>

      <div className='main-content'>
        <img src={img1} className='img1' alt='No image found' />
          <img src={word} className='word' alt='No image found' />
        </div>

        <div className='form'>
        <form >
            <h1 id='heading'>G E T   I N  T O U C H</h1>
            <input type="text" className='name' placeholder='Name'/>
            <input type='number' className='phone' placeholder='Phone' />
            <br />
            <input type='email' className='email' placeholder='Email' />
            <input type='text' className='drop' placeholder='What are you celebrating ?' />
             <br />
             <input type='text' className='test' placeholder='Number of People' />
             <input type='text' className='test1' placeholder='Location Preferred' />
             <br />
             <input type='text' className='test' placeholder='Tentative Check in' />
             <input type='text' className='test1' placeholder='What is your per personal' />
             <br />

             <div className='ratio'>
             <div className='radio'>
             <p>Would you require additional assistance for decor/set-ups? </p>
             
             <input type="radio" /> Yes
             <br />
             <input type="radio" /> No
             </div>
             <br />
             
             
                  <div className='radio1'>
             <p >Your plan *</p>
             <input type="radio" /> Overnight Stay
             <br/>
             <input type="radio"  /> DayEvent
             </div>
             </div>
             <p className='last-word'>By clicking on submit you agree to your privacy policy</p>
             <button className='button'>Request a Quote</button> 
          </form>
          </div>

      <div className='sub-content'>
        <img src={img2} className='img2' alt='No image found' />
        <h1 className='heading'>50,000+ FAMILIES TRUST US</h1>
        
        
        <div className='text'>
          <img src={comma} className='comma' alt='No image found' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fuga facilis voluptate harum veritatis facere voluptatum optio, temporibus, minima nostrum quae earum ipsa repellat rem! Sapiente at fuga saepe odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fuga facilis voluptate harum veritatis facere voluptatum optio, temporibus, minima nostrum quae earum ipsa repellat rem! Sapiente at fuga saepe odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum nobis eaque aliquid illo praesentium mollitia, .</p> 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            <br/ > <p>Rerum deserunt quod voluptatum, distinctio qui sint rem reprehenderit nisi necessitatibus iure cumque laudantium quasi similique.</p>
        </div>
        
        <div >
          <img src={img3} className='img3' alt='No image found' />
          </div>
        
        
        </div>
        <div>
        <img src={word1} className='word1' alt='No image found' />
        </div>


        <div className='mini-content'>
          <img src={Rectangle} className='rectangle' alt='No image found' />
         <h3 className='group'>Reunion Picnics And Meets</h3>
         <p className='group1'>Give your undivided attention to your friends, While we give your attention to details.</p>
         </div>
         <div className=''>
           <img src={img4} className='img4' alt='No image found' />

          </div>
          <div className=''>
            <img src={img5} className='img5' alt='No image found' />
            <button className='button1'>Get in Touch</button>
          </div>
      </div>
      
      
                
      
    
  )
}

export default App
