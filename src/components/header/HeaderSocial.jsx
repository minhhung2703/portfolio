import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.facebook.com/hung.nguyenminh.56027/" target="_blank"><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/minh-h%C6%B0ng-nguy%E1%BB%85n-6041a8243/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/minhhung2703" target="_blank"><BsGithub/></a>

    </div>
  )
}

export default HeaderSocial