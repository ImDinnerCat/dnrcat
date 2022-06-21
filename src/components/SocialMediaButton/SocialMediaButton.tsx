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
                        
                    default:
                        return(<span>Error</span>)
            } })()}
        </a>
    )
    
}