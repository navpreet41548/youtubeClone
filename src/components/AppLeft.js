import React from 'react'
import '../components/AppLeft.css'
import {GiHamburgerMenu} from "react-icons/gi"
import {HiHome} from "react-icons/hi"
import {IoMdCompass} from "react-icons/io"
import {BsCollectionPlayFill} from "react-icons/bs"
import {MdVideoLibrary} from "react-icons/md"

function BodyLeft() {
    return (
        <div className="appLeft">
            <div className="burgerContainer">
                <GiHamburgerMenu size="22px"color="white" />
            </div>
            <div className="iconsContainer">
                <HiHome size="22px" color="white" />
                <p className="iconLable">Home</p>
            </div>
            <div className="iconsContainer">
                <IoMdCompass  size="22px" color="white" />
                <p className="iconLable">Explore</p>
            </div>
            <div className="iconsContainer">
                <BsCollectionPlayFill size="22px" color="white" />
                <p className="iconLable">Subscriptions</p>
            </div>
            <div className="iconsContainer">
                <MdVideoLibrary  size="22px" color="white" />
                <p className="iconLable">Library</p>
            </div>
        </div>
    )
}

export default BodyLeft  
