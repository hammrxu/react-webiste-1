import React from "react";
import WorkTemplate from './WorkTemplate';

function Work01() {
    const achievements_all = [
        'Manage contents, displays, and updates on the organizational WordPress website of the Toronto branch',
        'Ensure integrity of site to all other sites for all other cities in the Greater Toronto Area',
        'Automate events inputs by importing from Google Calendar creating and setting up Google APIs',
        'Coordinate and train coworkers to maintain its Facebook group(7000+ users) & page and its Instagram for posting events updates',
        'Work closely in a team of 6 people through emails and social medias',
        'Use Google Analytics4 to analize, marketing the webiste'
    ]

    const img_src_all = ['../../images/img-1.jpg']

    const skills_all = ['WordPress', 'CMS', 'GA4', 'CSS3', 'HTML5', 'JavaScript', 'WP plugins includes:', 'Wpform Elite', 'Modern Events Calendar Lite', 'SmartCrawl Pro', 'User Role Editor']
    const img_src_all_objs = img_src_all.map(
        (img_src, i) => ({
            id: i,
            src: img_src
        })
    );
    const achievements_all_objs = achievements_all.map(
        (achievement, i) => ({
            id: i,
            title: achievement
        })
    );
    const skills_all_objs = skills_all.map(
        (skill, i) => ({
            id: i,
            title: skill
        })
    );
    return (
        <>

            <WorkTemplate
                title_name='Online Platform Manager'
                work_name='WordPress: International Student Ministries Canada'
                work_start='Aug 2022'
                work_desc='Working in a student-facing non profit organization as Online Platform Manager.'
                company_name='ISMC(International Student Ministries Canada)'
                company_location='Toronto, ON'
                company_website='https://www.torontointernationalstudent.com/'
                achievements_list={achievements_all_objs}
                img_src_list={img_src_all_objs}
                skills_list={skills_all_objs}
            />
        </>
    );
}

export default Work01;