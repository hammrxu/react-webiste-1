import React from 'react';
import './WorkTemplate.css';

function WorkTemplate(props) {
    const ach_tempList = props.achievements_list
    const ach_listItems = ach_tempList.map((data) =>
        <li key={data.id}>{data.title}</li>
    );

    const img_tempList = props.img_src_list
    const img_listItems = img_tempList.map((data) =>
        <img key={data.id} src={data.src} alt='Imgs'></img>
    );

    const skill_tempList = props.skills_list
    const skill_listItems = skill_tempList.map((data) =>
        <div key={data.id}>{data.title}</div>
    );
    const work_link_display = props.work_link_display

    return (

        <div>
            <div className='route-works-display_area'>
                <div className='work_display_area'>
                    <div className='work_display_left work_display_split'>
                        <div className='work_basic_info_group'>
                            <PartAboutWork
                                title={props.title_name}
                                work_name={props.work_name}
                                work_link_display={work_link_display}
                                work_link={props.work_link}
                                work_start={props.work_start}
                                work_desc={props.work_desc}
                            />
                        </div>
                        <div className='work_company_info_group'>
                            <PartAboutCompany
                                company_name={props.company_name}
                                company_location={props.company_location}
                                company_website={props.company_website}
                            />
                        </div>
                    </div>
                    <div className='work_display_right work_display_split'>
                        <PartAchievements
                            list={ach_listItems}
                        />
                        <PartImgs
                            list={img_listItems}
                        />
                        <PartSkills
                            list={skill_listItems}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function PartAboutWork(props) {
    const work_link_display = props.work_link_display
    return (
        <>
            <div className='work-title'>About Work</div>
            <p><strong>Title: </strong>{props.title_name}</p>
            <p><strong>Where:</strong> {props.work_name}</p>
            {work_link_display ? <p><strong>Demo:</strong> <a href={props.work_link} target='_blank' rel="noreferrer">Click Link</a></p> : ''}
            <p><strong>Start Date:</strong> {props.work_start}</p>
            <p><strong>Short Description:</strong> {props.work_desc}</p>
        </>
    );
}

function PartAboutCompany(props) {
    return (
        <>
            <div className='work-title'>About Work Company/Organization</div>
            <p><strong>Name:</strong> {props.company_name}</p>
            <p><strong>Location:</strong> {props.company_location}</p>
            <p><strong>Website:</strong>  <a href={props.company_website} target='_blank' rel="noreferrer">Click Link</a></p>
        </>
    );
}

function PartAchievements(props) {
    return (
        <>
            <div className='work_highlights_info_group'>
                <div className='work_achievements'>
                    <div className='work-title'>Achievements: </div>
                    <ul className='ach-list'>
                        {props.list}
                    </ul>
                </div>
            </div>
        </>
    );
}
function PartImgs(props) {
    return (
        <>
            <div className='work_img_carousel_group'>
                <div className='work-title'>Related Images</div>
                {/* <div>Relative Images Component Placeholder</div> */}
                <div className='img-list'>
                    {props.list}
                </div>
            </div>
        </>
    );
}
function PartSkills(props) {
    return (
        <>
            <div className='work_skills_used_group'>
                <div className='work_skills_used'>
                    <div className='work-title'>Skills: </div>
                    <ul className='skill-list'>
                        {props.list}
                    </ul>
                </div>
            </div>
        </>
    );
}


// WorkTemplate.defaultProps = {

// }

export default WorkTemplate;
