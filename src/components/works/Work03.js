import React from "react";
import Work_Template from './Work_template';

function Work02() {
    const achievements_all = [
        'Fast adapted to the CakePHP working environment and developed new functions by coding PHP and JavaScript in view, and controller parts',
        'Developed new CRUD functions to SQL database using JQuery Ajax and PHP', 'Implemented components for uploading, downloading images, and all files using JavaScript', 'Improved UI/UX of implemented Content Management System project using Less for styling', 'Collaborated with a team of two through GitHub including fetch, pull requests, and code reviews'

    ]
    const img_src_all = ['../../images/img-3.png']
    const skills_all = ['PHP', 'Mysql']
    return (
        <>
            <Work_Template
                title_name='Front-End Dev'
                work_name='JQeury/PHP: Freelance Work Experience'
                work_start='Jan 2022'
                work_desc='Building the map query, file+image upload,navigation in MVC environment'
                company_name='Freelance'
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
