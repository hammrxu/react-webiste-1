import React from "react";
import Work_Template from './Work_template';

function Work01() {
    const achievements_all = [
        'Manage organizational Toronto website on WordPress and align the consistent design to all sites for all other cities in Greater Toronto Area',
        'Design, develop and deploy responsive and mobile-friendly design for event pages',
        'Automate events to be imported from Google Calendar using Google APIs',
        'Coordinate and train coworkers on its Facebook group(7000+ users) & page and Instagram for posting events updates',
        'Work in a team of 6 people closely'
    ]
    const img_src_all = ['../../images/img-1.jpg']
    const skills_all = ['WordPress', 'CMS', 'Figma', 'Canva', 'CSS3', 'HTML5', 'JavaScript', 'WP plugins includes:', 'Wpform Elite', 'Modern Events Calendar Lite', 'SmartCrawl Pro', 'Elementor', 'User Role Editor']
    return (
        <>

            <Work_Template
                title_name='Online Platform Manager'
                work_name='WordPress: International Student Ministries Canada'
                work_start='Aug 2022'
                work_desc='Volunteering in a student facing non profit organization as Online Platform Manager.'
                company_name='ISMC(International Student Ministries Canada)'
                company_location='Toronto'
                company_website='https://www.torontointernationalstudent.com/'
                achievements_list={achievements_all}
                img_src_list={img_src_all}
                skills_list={skills_all}
            />
        </>
    );
}

export default Work01;
