import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import './whatwedo.css'
import pic1 from '../source/Mask group.png'
import pic2 from '../source/internal.png'
import pic3 from '../source/designer.png'



export default function Whatwedo() {
  return (
    <div>
        <Header/>
            <div className="whatwedo">
                <h1 className="whatwedo_h1">Who we are and why we do what we do.</h1>
                <p className="whatwedo_p">From its very conception, Edugate was founded to solve (our own) student problems. It was, and still is,fuelled by 
    a strong belief in the value of international experiences - both for the individual student and for the society.</p>
                <button className="whatwedo_btn">Our Mission</button>
            </div>
            <div className='div_para'>
                <p className='para_text'>At Studyportals, we have always been an idealistic bunch of people. From the very start until today, our team continues to unify under a shared belief that strengthening international education for the entire world can not only be easier, but it can also be more inspiring.
We remain consistently optimistic about the value of international education – a sense of confidence that all of our superheroes carry with them in everything we do. It’s the best way to keep our eyes set on long-term goals, and ensures that we continue to create the world’s largest education search platform.</p>
            </div>
            <div className="founders">
                <h1>Meet The Founders</h1>
                <div className="pictures">
                    <div className="pic">
                        <img className='pic_inn' src={pic1} alt="" />
                        <h3>Hamza Munawar</h3> 
                        <p className='position'>CEO</p>
                    </div>
                    <div className="pic">
                        <img className='pic_inn' src={pic2} alt="" />
                        <h3>Adnan Afroz</h3>
                        <p className='position'>Director</p>
                    </div>
                    <div className="pic">
                        <img className='pic_inn' src={pic3} alt="" />
                        <h3>Mudabbir Alim</h3>
                        <p className='position'>Chief Architect</p>
                    </div>
                </div>
                <button id='meet' className='btn'>Meet The Rest Of Our Team</button>
            </div>
            <div className="ourmission">
                <h1>Our Mission & Values</h1>
                <p  className='mission_cont'><span>We want the world to choose education: </span> we want everyone to embrace education, by any means, as the path to strong leadership, creative thinking, and a better society.<br/><br/>
 <span>We want the world to choose education: </span> want education choice to be transparent, enabling students and people worldwide to choose for themselves the education that fits their needs best.<br/><br/>
From the design of our office to the layout of our platforms, to the decorations at our desks, Edugate is a company built upon the mission of global education transparency, choice, and access across borders. We grow as our users and clients grow, making education the thing that energises our whole company personality. We share insights, innovate our products, develop ourselves, and – most importantly – contribute to an educated global society that is more tolerant and open.<br/><br/>
We actively share insights, continuously innovate our products, invest in personal development, and, above all, contribute to the flourishing of a globally educated society that thrives on tolerance and openness.<br/><br/>
Stepping into the realm of our services, we proudly present a groundbreaking solution for accessing academic data from all universities in a remarkably efficient manner. Navigate like a professional with the aid of our sophisticated filters, ensuring that you unlock a wealth of information with unparalleled ease. <br/><br/><br/></p>
            </div>

        <Footer/>
      
    </div>
  )
}
