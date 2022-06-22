import React from 'react';
import { ProjectListItem } from '../ProjectListItem/ProjectListItem';

import s from './ProjectList.module.scss';

export type Props = {
    items: any;
}

export const ProjectList: React.FC<Props> = ({ items }) => {

    return(
        <div className="row row-cols-1 g-4">
            {items.map((item: any, index: any) => {
                 return(
                    <div key={index} className="col">
                        <ProjectListItem 
                            title={item.title}
                            text={item.text}
                            logo={item.logo}
                            link={item.link}
                            background={item.background}
                            labels={item.labels}
                            key={index}
                        />
                    </div>
                )
            })}
        </div>
    )
    
}