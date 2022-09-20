import React from 'react'
import './index.css'
import Icon from '../icon'
import {
  mdiPhoneInTalk,
  mdiMessageText,
  mdiDomain,
  mdiFacebook,
  mdiInstagram,
  mdiYoutube,
  mdiTwitter
} from '@mdi/js'

export default function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-content">
        <div className="footer-list">
          <div className="footer-list-days">
            <ul>
              <li>Sunday</li>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Friday</li>
              <li>Saturday</li>
            </ul>
          </div>
          <div className="list-point">
            <ul>
              <li>---</li>
              <li>---</li>
              <li>---</li>
              <li>---</li>
              <li>---</li>
              <li>---</li>
            </ul>
          </div>
          <div className="list-hours">
            <ul>
              <li>Closed</li>
              <li>8.00-20.00</li>
              <li>10.00-5.00</li>
              <li>12.00-9.00</li>
              <li>7.00-1.00</li>
              <li>9.00-12.00</li>
            </ul>
          </div>
          <div className="footer-info-container">
            <div className="footer-content-contacts">
              <h2>Adress</h2>
              <div className="footer-info">
                <div className="info-icon">
                  <Icon path={mdiPhoneInTalk} color="#fbb403" />
                  <p>+449 888 666 0000</p>
                </div>
                <div>
                  <Icon path={mdiMessageText} color="#fbb403" />
                  <p>foodg@gmail.com</p>
                </div>
                <div>
                  <Icon path={mdiDomain} color="#fbb403" />
                  <p>855 Hoi An, Viet Nam</p>
                </div>
              </div>
              <div className="footer-contact">
                <Icon path={mdiFacebook} mr="10px" color="rgb(45, 136, 255)" />
                <Icon path={mdiTwitter} mr="10px" color="rgb(93 169 221)" />
                <Icon path={mdiYoutube} mr="10px" color="rgb(245 96 64)" />
                <Icon path={mdiInstagram} color="rgb(245 96 64)" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-card">
          <figure className="footer-card-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLm2YSki43iCxh_leE-Pyms_YbLHMF_F0-w&usqp=CAU"
              alt=""
            />
          </figure>
        </div>
      </section>
    </footer>
  )
}
