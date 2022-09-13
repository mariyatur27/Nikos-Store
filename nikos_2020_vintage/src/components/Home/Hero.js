import React from 'react'
import video from '../../assets//bg_video_1.mp4'
import './hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookMessenger, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { productDisplay } from './data/displayProducts'

export default function Hero() {
  return (
    <>
        <div className='hero-section'>
            <video src={video} autoPlay loop muted/>
            <div className='section-content'>
                <h1>NIKOS 2020 Vintage</h1>
                <h4>Find vintage products with history and soul, just for you</h4>
                <a href='/products'><button class='main-btn'>Explore Catalogue</button></a>
            </div>
        </div>

        <div className='row' id='main-sec-1'>
            <div className='sub-sec sec-text'>
                <h1 style={{color:'#7fd5ce'}}>Who are we?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla bibendum erat, vel semper velit. Aenean lacinia, urna non iaculis sagittis, augue tellus pulvinar libero, quis tempor sem ante sed elit. Nulla nec dui eget mauris convallis pulvinar sed sit amet sem. Etiam blandit elementum porttitor. Nullam mollis lacus lorem. Vestibulum commodo laoreet leo non viverra. Proin in lacinia ligula, vitae cursus leo. Nullam quis ipsum a ligula efficitur rhoncus.</p>
                <div className='row' id='social-links'>
                    <a href='' style={{marginRight: '2%'}}><FontAwesomeIcon icon={faFacebook} size='2x' color='#7fd5ce'/></a>
                    <a href='' style={{marginRight: '2%'}}><FontAwesomeIcon icon={faFacebookMessenger} size='2x'  color='#7fd5ce'/></a>
                    <a href='' style={{marginRight: '2%'}}><FontAwesomeIcon icon={faTelegram} size='2x' color='#7fd5ce'/></a>
                    <a href='' style={{marginRight: '2%'}}><FontAwesomeIcon icon={faInstagram} size='2x'  color='#7fd5ce'/></a>
                    <a href='' style={{marginRight: '2%'}}><FontAwesomeIcon icon={faTwitter} size='2x' color='#7fd5ce'/></a>
                </div>
            </div>
            <div className='sub-sec sec-img'>
                <img src='https://images.unsplash.com/photo-1492541737557-dfd592c6e42d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            </div>
        </div>

        <div className='row' id='main-sec-2'>
            <div className='sub-sec sec-img hide-mobile'>
                <img src='https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            </div>
            <div className='sub-sec sec-text'>
                <h1 style={{color:'#7fd5ce'}}>What do we do?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla bibendum erat, vel semper velit. Aenean lacinia, urna non iaculis sagittis, augue tellus pulvinar libero, quis tempor sem ante sed elit. Nulla nec dui eget mauris convallis pulvinar sed sit amet sem. Etiam blandit elementum porttitor. Nullam mollis lacus lorem. Vestibulum commodo laoreet leo non viverra. Proin in lacinia ligula, vitae cursus leo. Nullam quis ipsum a ligula efficitur rhoncus.</p>
                <a href='/products' className='button-links'><button class='secondary-btn'>Find a Product For You</button></a>
            </div>
        </div>

        <div id='product-display-section'>
            <div className='centered-title' style={{color:'#7fd5ce'}}>Each product tells a story</div>
            <div className='product-display'>
                {productDisplay.map((data, key) => (
                    <a href='/products' className='product-display-links'>
                        <div className={'product-box ' + data.class} key={key} id={data.id}>
                            <img className='product-img' src={data.product_image} />
                            <div className='product-name'>{data.product_name}</div>
                        </div>
                    </a>
                ))}
            </div>
            <div className='scroll-sec'>
                <div className='left-centered-div'>
                    <a href='/#product-4' style={{scrollBehavior:'smooth'}}>
                        <p>Scroll</p>
                        <FontAwesomeIcon icon={faArrowRight} id='scroll-arrow'/>
                    </a>
                </div>
            </div>
            <div className='centered-onj'>
                <a href='/products' className='button-links button-links-ds'><button class='center-btn'>Explore More Products</button></a>
            </div>
        </div>
    </>
  )
}
