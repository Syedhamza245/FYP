import React from 'react'
import './filter.css'
import slider from '../source/Slider.png'
import programmes from '../source/prog.png'
import Location from '../source/Loc.png'
import Budget from '../source/budg.png'
import IELTS from '../source/IELTS.png'
import CGPA from '../source/gpa.png'
import Scholarship from '../source/Scholarship.png'
import favourite from '../source/Favorite.png'
import Header from '../components/Header';
import Footer from '../components/Footer'


export default function Filter() {
  return (
    <div>
      <Header/>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <div className="body">
            <h1 className='main_heading'>Discover Your Ideal Higher Education Program With Us.</h1>
            <div className="main">
              <div className="filter_icon"><h3>Filters</h3><img className='slider' src={slider} alt="" /></div>
              <ul className="filters">
                <div className="extra"><img src={programmes} alt="" /><li className="filter"><a href="">Programs</a></li></div>
                <div className="extra"><img  src={Location} alt="" /><li className="filter"><a href="">Location</a></li></div>
                <div className="extra"><img  src={Budget} alt="" /><li className="filter"><a href="">Budget</a></li></div>
                <div className="extra"><img className='diff_size_two' src={IELTS} alt="" /> <li className="filter"><a href="">No IELTS</a></li></div>
                <div className="extra"><img className='diff_size_two' src={CGPA} alt="" /> <li className="filter"><a href="">CGPA</a></li></div>
                <div className="extra"><img  src={Scholarship} alt="" /> <li className="filter"><a href="">Scholarship</a></li></div>
              </ul>
            </div>
            <div className="program_carts">

              {/* -------------- 1st ----------------- */}
                <div className="each">
                  <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* ------------- 2nd --------------- */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* ------------------- 3rd ----------------- */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* ----------------- 4th ---------------------- */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* ------------------- 5th ------------------- */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* ---------------- 6th ------------------ */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div></div>   

                  {/* --------------- 7th ------------- */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* --------------- 8th ---------------- */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>
                 
                 {/* -------------------- 9th ------------------- */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* -------------------- 10th ------------------ */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* ------------------- 11th ------------------ */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>

                {/* -------------------- 12th ----------------------  */}
                <div className="each">
                <div className="carts_content">
                    <h2>Software Engineering Development</h2>
                    <img className='fav' src={favourite} alt="" />
                  </div>
                  <div className="carts_content">
                    <p className='carts_content_para'>With the online Bachelor's Degree in Techniques for Software Application Development (Online) from Universitat Oberta de Catalunya (UOC), you will master the languages, tools, technologies, skills and best practices used by software development professionals and system administrators.</p>
                    <label htmlFor="">369,747(PKR/year)</label>
                  </div>
                  <div id='footer' className="carts_content">
                    <p  className='footer_left'>Universitat Oberta de Catalunya (UOC)</p>
                    <p  className='footer_right'>Scholarships available</p>
                  </div>
                </div>
                </div>
            </div>
      <Footer/>
    </div>
  )
}
