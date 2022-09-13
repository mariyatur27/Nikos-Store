import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookMessenger, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <div id='footer'>
            <div className='centered-onj'>
                <div className='row' id='social-links-footer'>
                    <a href='' style={{marginRight: '2%', color:'white'}}><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
                    <a href='' style={{marginRight: '2%', color:'white'}}><FontAwesomeIcon icon={faFacebookMessenger} size='2x'/></a>
                    <a href='' style={{marginRight: '2%', color:'white'}}><FontAwesomeIcon icon={faTelegram} size='2x'/></a>
                    <a href='' style={{marginRight: '2%', color:'white'}}><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
                    <a href='' style={{marginRight: '2%', color:'white'}}><FontAwesomeIcon icon={faTwitter} size='2x'/></a>
                </div>
            </div>
            <div className='centered-onj small-font' style={{textAlign: 'center'}}>
                <p>Copyrihgt Nikos 2020 Vintage. All Rights Reserved <br></br> Developed and Designed by Mariya Turetska</p>
            </div>
        </div>
  )
}
