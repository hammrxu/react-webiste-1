import React from "react";
import Work_Template from './Work_template';

function Work02() {
    const achievements_all = [
        'Designed, deployed, and build a web-based tool designed to help minimization of coworkers schedule conflicts as Full Stack using JQuery, PHP, MySql',
        'Developed login portal, and register portal that validates users and helped the user privilege controls in the future',
        'Achieved the working independence of building for both front end and back end from scratch'
    ]
    const img_src_all = ['../../images/img-2.png']
    const skills_all = ['PHP', 'Mysql']
    return (
        <>
            <Work_Template
                title_name='IT Support Associate'
                work_name='JQeury/PHP/MySql: WTCBC Church'
                work_start='Apr 2022'
                work_desc='Created a web-based tool in PHP/Jquery/Mysql designed for the organization to schedule/assign service to helper for avoiding conflicts'
                company_name='West Toronto Chinese Bible Church'
                company_location='Toronto, ON'
                company_website='https://wtcbc.com/'
                achievements_list={achievements_all}
                img_src_list={img_src_all}
                skills_list={skills_all}
            />
        </>
    );
}

export default Work02;
