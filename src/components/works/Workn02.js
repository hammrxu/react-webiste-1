import React from "react";
import Work_Template from './Work_template';

function Workn02() {
    const achievements_all = [
        'Learned more about the structure and interpretation of computer programs and demonstrated the ability to analyze a programming language using Python.', 'implementation of an interpreter for a computer language called LISP.'

    ]
    const work_link_display = true;
    const img_src_all = ['../../images/img-4.jpg']
    const skills_all = ['LISP', 'Python']

    return (
        <>
            <Work_Template
                title_name='MLH Hackathon Project-Lisp Interpreter'
                work_name='MLH Backyard Hacks III'
                work_start='Aug 2022'
                work_link='https://devpost.com/software/simple-lisp-interpreter-in-python'
                work_link_display={work_link_display}
                work_desc='Developed a simple interpreter to execute instructions are written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program.'
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

export default Workn02;
