import React from 'react'
import './footer.css'
import Twitter from '../source/TwitterX.png'
import Facebook from '../source/Vector.png'
import Linkedin from '../source/LinkedIn.png'



export default function Footer() {
  return (
    <div>
        <div className="footer">
      <div className="one">
        <h3 className='footer_h3'>SITEMAP</h3>
        <ul className='footer_ul'>
            <li className='footer_li'>About Us</li>
            <li className='footer_li'>B.S Programmes</li>
            <li className='footer_li'>M.S Programmes</li>
            <li className='footer_li'>Contact Us</li>
        </ul>
      </div>
      <div className="one">
        <h3 className='footer_h3'>Top Universities</h3>
        <ul className='footer_ul'>
            <li className='footer_li'>Monash University</li>
            <li className='footer_li'>University Of Warwick</li>
            <li className='footer_li'>The University Ranking</li>
            <li className='footer_li'>University Of Calgary</li>
        </ul>
      </div>
      <div className="one">
        <h3 className='footer_h3'>Services</h3>
        <ul className='footer_ul'>
            <li className='footer_li'>University Administration</li>
            <li className='footer_li'>Register Your University</li>
           <div className="links"> <li className='footer_li'>Follow US on :</li>
           <img  className='footer_icon' src={Twitter} alt="" />
           <img className='footer_icon' src={Facebook} alt="" />
           <img className='footer_icon' src={Linkedin} alt="" />
            </div>
        </ul>
      </div>
      </div>
      <div className="copyright">
        <p className="copyright_p">Copyright © 2023 Edugate</p>
        <p className="copyright_p">Disclaimer | Privacy Policy | Terms Of Use | Investors</p>
      </div>
    </div>
  )
}
