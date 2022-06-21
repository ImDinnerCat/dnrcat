import React from 'react';
import Image from 'next/image';


import s from './Usercard.module.scss';
import { SocialMediaBtn } from '../SocialMediaButton/SocialMediaButton';

export const Usercard: React.FC = () => {

    return(
        <div className={s.usercard}>
            <div className={s.banner}>
                <img className={s.bgImage} src="/banner.gif" />
            </div>
            <div className={s.avatar}>
                <img className={s.avatarImg} src="/profileImg.gif" />
            </div>
            <div className={"py-2 " + s.info}>
                <h1 className={s.username}>ImDinnerCat</h1>
                <h6 className={s.usertitle}>Digital Creator</h6>
            </div>
            <div className="row px-5 py-3">
                <div className="col-12 col-md-6">
                    <h4 className={s.title}>Über mich</h4>
        
                    <span className={"mb-1 " + s.aboutMeTxt}>
                        <i className="fa-solid fa-user-astronaut"></i> M-20 ~ ENTP-T
                    </span>

                    <span className={"mb-1 " + s.aboutMeTxt}>
                        <i className="fa-solid fa-satellite"></i> Science-Nerd
                    </span>

                    <span className={"mb-1 " + s.aboutMeTxt}>
                        <i className="fa-solid fa-clapperboard"></i> Movie-Nerd
                    </span>

                    <span className={"mb-1 " + s.aboutMeTxt}>
                        <i className="fa-solid fa-signature"></i> Brand Designer
                    </span>

                    <span className={"mb-1 " + s.aboutMeTxt}>
                        <i className="fa-solid fa-compass-drafting"></i> Full Stack Designer
                    </span>

                    <span className={s.aboutMeTxt}>
                        <i className="fa-solid fa-code"></i> Full Stack Developer
                    </span>
                </div>
                <div className="col-12 col-md-6">
                    <h4 className={s.title}>Social Media</h4>

                    <div className="row row-cols-2 g-3">
                        <div className="col">
                            <SocialMediaBtn type="github" link="https://github.com/ImDinnerCat" />
                        </div>

                        <div className="col">
                            <SocialMediaBtn type="discord" link="https://discordapp.com/users/471076195233038345" />
                        </div>

                        <div className="col">
                            <SocialMediaBtn type="youtube" link="https://www.youtube.com/channel/UCeOue-rBXmuDVPW0VFApyKA" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}