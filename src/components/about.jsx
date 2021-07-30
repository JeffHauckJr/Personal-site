import React from "react"
import sports from './img/hs_baseball.jpg'



const AboutInfo = () => {
    return (
        <>
        <h1 className='about-header'>Trying to keep up with technological growth can be time consuming. But, sometimes we need to find a healthy balance. So, when I am not growing my knowledge I do try and fit some things I enjoy. Here are a few.</h1>
        <div className='about-container'>
            <article className='blurd-1-containter'>
                <img src={sports} alt=''></img>
                
            </article>
        </div>
        </>
    )
}

export default AboutInfo