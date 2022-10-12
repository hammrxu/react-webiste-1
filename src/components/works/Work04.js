import React from "react";
import WorkTemplate from './WorkTemplate';

function Work04() {
    const achievements_all = [
        'Fastened weekly data process time of a Shopify company from over 3 hours to 10 minutes by coding in VB.NET to develop an easy-to-use add-on of Excel',
        'Trained end users by helping with the installation of micros and UI',
        'Rewarded an extra 25% as a bonus payment for their satisfaction with the output',
        'Documenting the micros in development for future maintenance',
        'Provided written user manual for access of non-tech users'


    ]
    const work_link_display = false;
    const img_src_all = ['../../images/img-freshbasket.jpg', '../../images/img-freshvegitablebasket.jpg']
    const skills_all = ['VB.Net', 'Excel', 'Shopify plugins', 'Shopify', 'Organic Fruit', 'Organic Vegitables', 'Frozon Product']

    return (
        <>
            <WorkTemplate
                title_name='Part Time Worker'
                work_name='Truly Fresh'
                work_start='Jan 2022'
                work_link='Not provided'
                work_link_display={work_link_display}
                work_desc='Fastened weekly data process time of a Shopify company from over 3 hours to 10 minutes by coding in VB.NET to develop an easy-to-use add-on of Excel'
                company_name='Truly Fresh on Shopify'
                company_location='Toronto, ON'
                company_website='https://truly-fresh.ca/'
                achievements_list={achievements_all}
                img_src_list={img_src_all}
                skills_list={skills_all}
            />
        </>
    );
}

export default Work04;
