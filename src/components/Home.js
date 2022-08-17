import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';

import './Background.css'
import './Home.css'


const actions = [
    { icon: <InstagramIcon />, name: 'Instagram' },
    { icon: <LinkedInIcon />, name: 'LinkedIn' },
    { icon: <GitHubIcon />, name: 'Github' },
    { icon: <EmailIcon />, name: 'Email'}
  ];

const Home = () => {
    const clickListener = (name) =>{
        if(name === "Instagram"){
            window.location.replace("https://www.instagram.com/smantri99/")
        }
        else if(name === "Github"){
            window.location.replace("https://github.com/shubhammantri1");
        }
        else if(name === "Email"){
            navigator.clipboard.writeText("smantri600@gmail.com");
            alert("Email copied to clipboard");
        }
        else{
            window.location.replace("https://www.linkedin.com/in/shubhammantri1/");
        }
    }

    return (
        <div className='main'>
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="container">
                    <div className="profile-photo">
                        <img src={require('./shubham.png')}/>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <span className="animate-charcter"> Shubham Mantri</span>                    
                        </div> 
                        <div className="company-text">Software Developer at Walmart International</div>
                        <div className='experience'>
                            <div className="workedat">I contributed to: </div>
                            <div className="imgContainer">
                                <div className="axisbank">
                                    <img src={require('./axis_bank.png')}/>
                                </div>
                                <div className="inkredo">
                                    <img src={require('./inkredo.png')}/>
                                </div>
                                <div className='walmart'>
                                    <img src={require('./walmart.jpeg')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Box className='contacts' sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 10, right: 10 }}
                        icon={<ContactsIcon />}
                    >
                        {actions.map((action) => (
                        <SpeedDialAction
                            // key={action.name}
                            icon={action.icon}
                            // tooltipTitle={action.name}
                            onClick={()=>clickListener(action.name)}
                        />
                        ))}
                    </SpeedDial>
                    </Box>
            </div>
        </div>
        
    );
}

export default Home;