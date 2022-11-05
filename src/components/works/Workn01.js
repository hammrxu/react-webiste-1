import React from "react";
import WorkTemplate from './WorkTemplate';
import { useEffect, useState } from 'react';

function Workn01() {
    function loadWork() {
        fetch("https://hammer-resume-1.s3.amazonaws.com/WorksAPI.json")
            .then((response) => response.json())
            .then((data) => setWork(data[4]));
    }
    const [work, setWork] = useState([]);
    useEffect(() => { loadWork() });

    return (
        <>
            <WorkTemplate
                title_name={work.title_name}
                work_name={work.work_name}
                work_start={work.work_start}
                work_desc={work.work_desc}
                work_link_display={work.work_link_display}
                work_link={work.work_link}
                company_name={work.company_name}
                company_location={work.company_location}
                company_website={work.company_website}
                achievements_list={work.achievements_list}
                img_src_list={work.img_src_list}
                skills_list={work.skills_list}
            />
        </>
    );
}

export default Workn01;
