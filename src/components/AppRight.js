import React from 'react'
import {HiSearch} from "react-icons/hi"
import {IoMdMic} from "react-icons/io"
import {RiVideoAddFill} from "react-icons/ri"
import {RiGridFill} from "react-icons/ri"
import {BsFillBellFill} from "react-icons/bs"
import {MdKeyboardArrowRight} from "react-icons/md"


import '../components/AppRight.css'
import Logo from "../images/logo.png"
import Card from './Card'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'

import pro1 from '../images/pro1.jpg'
import pro2 from '../images/pro2.jpg'
import pro3 from '../images/pro3.jpg'
import pro4 from '../images/pro4.jpg'
import pro5 from '../images/pro5.jpg'
import pro6 from '../images/pro6.jpg'
import pro7 from '../images/pro7.jpg'


function BodyRight() {
    return (
        <div className="appRight">
            <header className="appRight_header">
                <img src={Logo} className="mainLogo" />
                <div className="appRight_headerCenter">
                    <div className="searchWraper">
                    <input placeholder="Search" type="text" className="searchInput"/>
                    <button className="searchButton"><HiSearch className="searchIcon" color="grey" size="15"/></button>
                    </div>
                    <div className="micWraper">
                    <IoMdMic className="appRight_headerLogoMic" color="white" size="22"/>
                    </div>
                </div>
                <div className="appRight_headerRight">
                    <RiVideoAddFill className="appRight_headerLogo" color="white" size="22"/>
                    <RiGridFill className="appRight_headerLogo" color="white" size="22"/>
                    <BsFillBellFill className="appRight_headerLogo" color="white"  size="22"/>
                    <p className="avatar">B</p>
                </div>
            </header>

            <section className="tagContainer">
                <div className="tag">All</div>
                <div className="tag">Mixes</div>
                <div className="tag">Music</div>
                <div className="tag">JavaScript</div>
                <div className="tag">Computers</div>
                <div className="tag">Songs</div>
                <div className="tag">Songs</div>
                <div className="tag">Trending</div>
                <MdKeyboardArrowRight className="arrow" color="white"/>
            </section>

            <section className="mainContainer">
                <Card title="How to SpaceX become no. 1 | live" channelName="Elon Musk" views="456K views . 43minutes ago" img={img1} profile={pro1} />
                <Card title="Bill gates success secret | Interview with bill" chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img3} profile={pro2}/>
                <Card title="Launching of spaceX. PT2 | Live Cover" chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img4} profile={pro3}/>
                <Card title="How is the view outside the ISS " chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img5} profile={pro4}/>
                <Card title="Best exercises for bigger arms at home" chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img6} profile={pro5}/>
                <Card title="How to find diamonds in just 5 Min" chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img7} profile={pro6}/>
                <Card title="Hindi Punjabi English song remix" chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img8} profile={pro7}/>
                <Card title="How to get Started with medium" chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img9} profile={pro1} />
                <Card title="How to make SpaceX become no. 1" chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img1} profile={pro1} />
                <Card title="How to make SpaceX become no. 1" chhannelName="Elon Musk" views="456K views . 43minutes ago" img={img1} profile={pro1} />
            </section>
        </div>
    )
}

export default BodyRight
