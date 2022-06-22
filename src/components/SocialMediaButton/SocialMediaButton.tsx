import React from 'react';


import s from './SocialMediaButton.module.scss';

export type Props = {
    type: string;
    link: string;
}

export const SocialMediaBtn: React.FC<Props> = ({ type, link }) => {

    return(
        <a href={link} target="_blank" className={s.socialMediaBtn}>
            {(() => {
                switch ( type ) {
                    case "github":
                        return(
                            <div className={s.main + " " + s.github}>
                                <span>
                                    <i className="fa-brands fa-github"></i>
                                    GitHub
                                </span>
                            </div>
                        )
                        break;

                    case "discord":
                        return(
                            <div className={s.main + " " + s.discord}>
                                <span>
                                    <i className="fa-brands fa-discord"></i>
                                    Discord
                                </span>
                            </div>
                        )
                        break;

                    case "reddit":
                        return(
                            <div className={s.main + " " + s.reddit}>
                                <span>
                                    <i className="fa-brands fa-reddit-alien"></i>
                                    Reddit
                                </span>
                            </div>
                        )
                        break;

                    case "instagram":
                        return(
                            <div className={s.main + " " + s.instagram}>
                                <span>
                                    <i className="fa-brands fa-instagram"></i>
                                    Instagram
                                </span>
                            </div>
                        )
                        break;

                    case "facebook":
                        return(
                            <div className={s.main + " " + s.facebook}>
                                <span>
                                    <i className="fa-brands fa-facebook"></i>
                                    Facebook
                                </span>
                            </div>
                        )
                        break;

                    case "twitter":
                        return(
                            <div className={s.main + " " + s.twitter}>
                                <span>
                                    <i className="fa-brands fa-twitter"></i>
                                    Twitter
                                </span>
                            </div>
                        )
                        break;

                    case "youtube":
                        return(
                            <div className={s.main + " " + s.youtube}>
                                <span>
                                    <i className="fa-brands fa-youtube"></i>
                                    YouTube
                                </span>
                            </div>
                        )
                        break;
                        
                    default:
                        return(<span>Error</span>)
            } })()}
        </a>
    )
    
}