import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz' >
                        <div className='colz-icon'>
                        <a href='https://web.facebook.com/profile.php?id=100080428670877'>
                            <i className='fa fa-facebook-square'></i>
                        </a> <br />
                        <a href='https://www.google.com/search?q=kmoral17tv&oq=kmoral&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyDAgCEAAYChixAxiABDIJCAMQABgKGIAEMgwIBBAAGAoYsQMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1ODExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'>
                            <i className='fa fa-google-plus-square'></i>
                        </a> <br/>
                        <a href='https://www.instagram.com/kmoral17/?hl=en'>
                            <i className='fa fa-instagram'></i>
                        </a> <br/>
                        <a href='https://www.youtube.com/channel/UC6BIrgq8YdeQKhbgj9rdq6w'>
                            <i className='fa fa-youtube-square'></i>
                        </a> <br />
                        <a href='https://twitter.com/home?utm_source=liteAPK&utm_medium=shortcut&first_run=false'>
                            <i className='fa fa-twitter'></i>
                        </a> 
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text poppins-extrabold-italic'>
                            {" "}
                            Hello, I'm <span className='highlighted-text poppins-extrabold-italic'>Oke Omoge</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1 className="poppins-regular">
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "🚀 Ethusiastic Dev",
                                        1500,
                                        "💻 Intermediate Software Engineer",
                                        1500,
                                        "⚛️ React Developer",
                                        1500,
                                        "🌐 Full Stack Web Developer (Junior Level)",
                                        1500,
                                        "🎙️ An astute radio presenter",
                                        1500,
                                        "🎥 A Youtuber",
                                        1500,
                                    ]}
                                />

                            </h1>
                            <span className='profile-role-tagline poppins-semibold'>
                            Proficiency in developing applications with both front-end and back-end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primmary-btn poppins-medium'>
                            {" "}
                            Hire Me{" "}
                        </button> 
                        {/* Adding space after the "Hire Me" button */}
                        <a href='OKE OMOGE.pdf' download='OKE OMOGE.pdf'>
                            <button className='btn highlighted-btn poppins-medium'>
                                {" "}
                                Download CV{" "}
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}
