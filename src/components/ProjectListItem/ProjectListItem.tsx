import React from 'react';

import s from './ProjectListItem.module.scss';

export type Props = {
    title: string;
    text: string;
    logo: string;
    link: string;
    background: string;
    labels: any;
    key: number;
}

export const ProjectListItem: React.FC<Props> = ({ title, text, logo, link, background, labels, key }) => {

    const checkHex=/^#([0-9a-f]{3}){1,2}$/i;

    let useBgImg = false;
    if (background) {
        useBgImg = true;
    }

    return(
        <a href={link} target="_blank">
            <div className={useBgImg ? s.bgImgLayer + " " + s.projectListItem : s.projectListItem}>

                { (() => {
                    if (background) {
                        return (
                            <img className={s.bgImg} src={background}></img>
                        )
                    }
                })() }

                <div className={"row m-0 " + s.main}>

                    <div className="col-6 px-5 py-5 d-flex justify-content-center align-items-center">
                        <img src={logo} className={s.icon} />
                    </div>

                    <div className={"col-6 px-3 py-3 d-flex flex-column " + s.infos}>

                        <h2 className="m-0">{title}</h2>
                        <span className="m-0">{text}</span>

                        <div className="row row-cols-auto g-2 mt-auto">
                            {labels.map((item: any, index: any) => {
                                return(
                                    <div className="col">
                                        { (() => {
                                            if (checkHex.test(item.background) === true) {
                                                const rand = (min: number, max: number) => {
                                                    return Math.floor(Math.random() * (max - min + 1) + min)
                                                }
                                                  
                                                const styleClass = "badge_" + rand(10000, 99999)

                                                return (
                                                    <>
                                                        <style jsx>{`
                                                            .${styleClass}{
                                                                color: ${item.color};
                                                                background-color: ${item.background};
                                                            }
                                                        `}</style>
                                                        <span className={"badge " + styleClass}><i className={item.icon}></i> {item.text}</span>
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <span className={"badge text-bg-" +  item.background}><i className={item.icon}></i> {item.text}</span>
                                                )
                                            }
                                        })() }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
    
}