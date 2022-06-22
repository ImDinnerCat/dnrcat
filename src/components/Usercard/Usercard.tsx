import React from 'react';
import Image from 'next/image';


import s from './Usercard.module.scss';
import { SocialMediaBtn } from '../SocialMediaButton/SocialMediaButton';

export type Props = {
    items: any;
}

export const Usercard: React.FC<Props> = ({ items }) => {

    return(
        <div className={s.usercard}>
            <style jsx>{`
                .banner_conf{
                    height: ${items.img.banner.height};
                    width: ${items.img.banner.width};
                    transform: translate(${items.img.banner.transform.x}, ${items.img.banner.transform.y});
                }

                .avatar_conf{
                    height: ${items.img.avatar.height};
                    width: ${items.img.avatar.width};
                    transform: translate(${items.img.avatar.transform.x}, ${items.img.avatar.transform.y});
                }
            `}</style>

            <div className={s.banner}>
                <img className={"banner_conf " + s.bgImage} src={items.img.banner.src} />
            </div>

            <div className={s.avatar}>
                <img className={"avatar_conf " + s.avatarImg} src={items.img.avatar.src} />
            </div>

            <div className={"py-2 " + s.info}>
                <h1 className={s.username}>{items.username}</h1>
                <h6 className={s.usertitle}>{items.usertitle}</h6>
            </div>

            <div className="row px-5 py-3">
                <div className="col-12 col-md-6">
                    <h4 className={s.title}>Über mich</h4>

                    {items.aboutMe.map((item: any, index: any) => {
                        return(
                            <span key={index} className={"mb-1 " + s.aboutMeTxt}>
                                <i className={item.icon}></i> {item.text}
                            </span>
                        )
                    })}
                </div>
                <div className="col-12 col-md-6">
                    <h4 className={s.title}>Social Media</h4>

                    <div className="row row-cols-2 g-3">
                        {items.socialMedia.map((item: any, index: any) => {
                            return(
                                <div key={index} className="col">
                                    <SocialMediaBtn type={item.type} link={item.link} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
    
}