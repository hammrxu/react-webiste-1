import React from "react";
import Work_Template from './Work_template';

function Work02() {
    const achievements_all = [
        'Design, Deploy and Build Church Scheduler web-based tool as Full Stack using JQuery, PHP, MySql',
        'Develop login portal, and register portal with verification sent to user’s email',
        'Shortened 5+ hours/each leader’s communication efforts dealing with schedule conflicts'
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
                company_location='Toronto'
                company_website='/'
                achievements_list={achievements_all}
                img_src_list={img_src_all}
                skills_list={skills_all}
            />
        </>
    );
}

export default Work02;
