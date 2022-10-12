import React from "react";
import WorkTemplate from './WorkTemplate';

function Work02() {
    const achievements_all = [
        'Adapted to the CakePHP coding framework fast by watching 100 hours+ Youtube learning videos on the web',
        'Developed new CRUD functions to SQL database using JQuery Ajax and PHP', 'Solved the missing functions of uploading and downloading files/images by coding, testing the new functions in PHP and JS, MySql', 'Improved UI/UX, and developed reusable styling components through coding in Less of CSS', 'Collaborated with another member through GitHub including fetch, pull requests, and code reviews'

    ]
    const img_src_all = ['../../images/img-3.png']
    const skills_all = ['PHP', 'Mysql']
    return (
        <>
            <WorkTemplate
                title_name='Front-End Dev'
                work_name='JQeury/PHP: Freelance Work Experience'
                work_start='Jan 2022'
                work_desc='Building the map query, file+image upload,navigation in MVC environment'
                company_name='Freelance'
                company_location='Toronto, ON'
                company_website='/'
                achievements_list={achievements_all}
                img_src_list={img_src_all}
                skills_list={skills_all}
            />
        </>
    );
}

export default Work02;
