import React from 'react'
import linkedin_logo_mini from '../images/LinkedIn_icon.svg.png'
import search from '../images/search_3917061.svg'
import home from '../images/house-chimney-window_9243285.png'
import network from '../images/signal-alt-2_3916743.png'
import job from '../images/noun-job-3754647.svg'
import profil from '../images/user-circle-svgrepo-com.svg'

export const Navbar = ({userData}) => {
    const profil_img = userData._document?.data?.value.mapValue.fields.profil_img.stringValue
    return (
        <div className='row py-1 ' >
            <div className='col-6 d-flex align-items-center' style={{backgroundColor:'white'}}>
                <img src={linkedin_logo_mini} alt='logo' style={{ width: '30px',marginLeft:"20px" }} />
                <img src={search} alt='search' style={{ width: '30px',marginLeft:"20px" }} />
            </div>
            <div className='col-6 d-flex align-items-center' style={{backgroundColor:'white'}}>
                <img src={home} alt='home' style={{ width: '30px',marginLeft:"20px" }} />
                <img src={network} alt='network' style={{ width: '30px',marginLeft:"20px" }} />
                <img src={job} alt='job' style={{ width: '30px',marginLeft:"20px", marginBottom:'-10px' }} />
                <img src={profil_img ? profil_img : profil} alt='profil' style={{ width: '40px',marginLeft:"20px", borderRadius:'20px' }} />
            </div>
            <hr/>
        </div>
    )
}
