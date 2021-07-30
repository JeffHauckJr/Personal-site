import React from "react"
import "./about.css"
import sports from './img/hs_baseball.jpg'


const AboutInfo = () => {

    const beginningStory = `Jeffery Hauck is a product of Southeaster Louisiana who found himself in Phoenix Arizona after Hurricane Katrina. Some may look at it as a bad thing. Me? I saw it as growth. An opportuinity to experience different cultures and people. I was always athletically inclined and had a good chance of making my way through college playing baseball. Unfortunately the good ole injury story happened. This broke some spirits but did not put me out. I did not really have a plan. I had put all of my eggs in that basket. That basket just happened to have a hole at the bottom. Thankfully, I always had an interest in tech. This interest thankfully set me on a path to succeed(possibly). I decided to take the leap and attend LSU's coding bootcamp. I had dabbled in coding prior, but this course lit a fire in me. Gave me new found passion in something I never thought I would achieve again.`
    
    return (
        <>
        <div className='header-container'>
        <h1 className='about-header'>Everyone has a story on how they began their journey in Tech. Mine may be a little different, but it is worth it. </h1>
        </div>
        
            <div className='blurb-1-container'>
                <div className='blurb-1-content1'>
                    <img className='img1' src={sports} alt='' style={{height: '450px', width: '350px', marginleft: '100px'} }></img>
                </div>
                <div className='blurb-1-content2'>
                    <h1>The Beginning</h1>
                    <p className='p1'>{beginningStory}</p>
                </div>    
            </div>
        </>
    )
}

export default AboutInfo