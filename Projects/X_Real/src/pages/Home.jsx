import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/home_hero_text'
import HomeBottomText from '../components/home/home_bottom_text'

const Home = () => {
    return (
        <>
            <div className="h-screen w-full fixed">
                <Video />
            </div>
            <div className="h-screen w-full relative flex flex-col">
                <HomeHeroText />
                <HomeBottomText />
            </div>
        </>
    )
}

export default Home

