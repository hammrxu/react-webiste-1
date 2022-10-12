import React from "react";
import WorkTemplate from './WorkTemplate';

function Workn01() {
    const achievements_all = [
        'Know better how front end contents and back end contents delivering and communication.'

    ]
    const work_link_display = true;
    const img_src_all = ['../../images/img-4.jpg']
    const skills_all = ['PHP', 'Mysql']

    return (
        <>
            <WorkTemplate
                title_name='MLH Hackathon Project'
                work_name='MLH Backyard Hacks III'
                work_start='Jan 2022'
                work_link='http://church-scheduler.lovestoblog.com/pages/index.php'
                work_link_display={work_link_display}
                work_desc='One day, I realize our church leaders will have to spend many puzzle time when scheduling helpers for sunday service because of communication to deal with helpers schedule conflicts. some helpers may also the other role of service...,So I start...'
                company_name='MLH Hackathon'
                company_location='Toronto, ON'
                company_website='https://devpost.com/hackathons?eligibility=1'
                achievements_list={achievements_all}
                img_src_list={img_src_all}
                skills_list={skills_all}
            />
        </>
    );
}

export default Workn01;
