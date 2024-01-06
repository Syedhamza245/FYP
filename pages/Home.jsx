import React from 'react'
import './home.css'
import banner from '../source/banner.png'
import cart1 from '../source/cart1.png'
import cart2 from '../source/cart2.png'
import cart3 from '../source/cart3.png'
import BS from '../source/BS.png'
import MS from '../source/MS.png'
import Students from '../source/students.png'
import Header from '../components/Header';
import Footer from '../components/Footer'





export default function Home() {
  return (
    <div>
        <Header/>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

      <div className="first">
        <img className='banner' src={banner} alt="" />
        <div className="text">
            <h1>Choose Your Best Abroad Destination.</h1>
            <p>Lorem ipnt enimSequi, ratione! amet nostrum perspiciatis ab doloremque laboriosam fugit sed id explicabo dignissimos dicta consequuntur voluptate, accusantium dolore. Odio at saepe nostrum, fuga veritatis atque aspernatur iste assumenda?
          Omnis aliquid obcaecati nam vero reprehenderit perferendis eveniet sint ad? Doloremque eos aut maxime fugiat eaque aspernatur harum optio accusantium in reprehenderit sit, atque dolor tempora velit perspiciatis modi voluptates.</p>
            <h1 id='no1'>Why EduGate Best for Choosing Abroad University.</h1>
            <div className='carts'>
            <div className="cart1">
                <img className='cart_icon' src={cart1} alt="" />
                <h3>Set Your Budget</h3>    
                <p className='para'>We offer an exceptional Budget search filter designed to assist you in selecting the perfect university based on both your financial considerations and individual preferences, ensuring an optimal match for your budget and suitability.</p>
            </div>
            <div className="cart1">
                <img className='cart_icon' src={cart2} alt="" />
                <h3>Without IELTS</h3>
                <p className='para'>We offer an exclusive Without IELTS filter, streamlining the process of selecting the ideal university based solely on your academic achievements. This filter ensures that you can choose the best university without the need for IELTS.</p>
                </div>
            <div className="cart1">
                <img className='cart_icon' src={cart3} alt="" />
                <h3>Set Your CGPA</h3>
                <p className='para'>We offer a handy Set GPA filter to make it easy for you to pick the right university based on your academic performance. This filter ensures that you can select the best university, focusing solely on your academic results.</p>
                </div>
            </div>
        </div>
        <div className='second'>
        <h1 className='how_std'>What Courses Are You Looking For ?</h1>
        <div className="second_carts">
            <div className="s_cart">
                <img className='bs' src={BS} alt="" />
                <h3 id='bs1'>Bachelor's Programmes</h3>
                <p className='para'>We offer an exceptional Budget search filter designed to assist you in selecting the perfect university based on both your financial considerations and individual preferences, ensuring an optimal match for your budget and suitability.</p>
                <button className='btn'>Search Bachelor's</button>
            </div>
            <div className="s_cart">
                <img className='bs' src={MS} alt="" />
                <h3 id='bs1'>Master's Programmes</h3>
                <p className='para'>We offer an exceptional Budget search filter designed to assist you in selecting the perfect university based on both your financial considerations and individual preferences, ensuring an optimal match for your budget and suitability.</p>
                <button className='btn'>Search Master's</button>
            </div>
        </div>
             <div className="third">
                <h1 className='how_std'>How Students Think About EduGate</h1>
                <div className="contain">
                    <div className="contain_inner">
                        <p id='std'>‘I started by searching on Google for courses that suites my interest and I was redirected to different websites, one of which is Edugate.com which turned out to be the most useful. I chose Vytautas Magnus University because it was the most affordable for me and the course completely suited my needs. Studyportals helped by giving me a wide range of detailed options of schools and courses to choose from. I did not have an idea of either the course or the university I wanted to attend. At the initial stage, before the application, I received all the necessary information about the course and school, through a direct website link to the course.</p>
                        <button className="read">Read More</button>
                    </div>
                    <div className="contain_inner">
                        <img src={Students} alt="" />
                    </div>
                </div>
            </div>
         </div>
      </div>
      <Footer/>
    </div>
    
  )
}
