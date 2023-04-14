import React from 'react';
import './CV.css';
import profilePic from './Ntsika_img.png';

function CV() {
    return (
        <div className='cv'>
            <header>
                <img src={profilePic} alt="profile-pic"/>
                <h1 className='bigName'>NTSIKA SILVANO</h1>
                <h5>Address: Johannesburg, Gauteng, South Africa</h5>
                <h5>Email: silvano.n92@gmail.com</h5>
                <h5>Cell: 078-976-6337</h5>
                <h5>LinkedIn: <a href='https://www.linkedin.com/in/ntsika-silvano-a66863106/'>https://www.linkedin.com/in/ntsika-silvano-a66863106/</a></h5>
            </header>
            <hr className='end-section'></hr>
            <section>
                <h2>SUMMARY</h2>
                <hr className='start-section'></hr>
                <p>As a self-taught full-stack web developer with expertise in the MERN stack and experience in IT support and network administration, I am passionate about creating responsive and efficient web applications. Having spent several years in the industry, I bring a strong sense of dependability, patience, and attention to detail to all my work. Whether it's troubleshooting network issues or building robust web applications, I always strive for excellence and take pride in achieving project goals. I am a team player who values communication and enjoys collaborating with others to deliver high-quality results. Currently, I am enrolled in a HyperionDev boot camp to expand my skill set and continue honing my craft.</p>
            </section>
            <hr className='end-section'></hr>
            <section>
                <h2>EXPERIENCE</h2>
                <hr className='start-section'></hr>
                <ul>
                    <li>CO-OWNER AND RECORD PRODUCER at Security Records(PTY) LTD (2020 - present)</li>
                    <li>FIBRE OPS TECHNICIAN at Afrihost SP (2019 - Present)</li>
                    <li>CUSTOMER SERVICE REPRESENTATIVE at Aegis Global (2018 - 2019)</li>
                    <li>SALES AND CUSTOMER SERVICE CONSULTANT at Blue Tech Retail (2015 - 2018)</li>
                    <li>SALES AND CUSTOMER SERVICE CONSULTANT at Cellutech CC (2015 - 2015)</li>
                    <li>CO-FOUNDER AND RECORD PRODUCER at Monstar House (PTY) LTD (2014 - 2018)</li>
                    <li>SALES AND CUSTOMER SERVICE CONSULTANT at One Cell (PTY) LTD (2013 - 2013)</li>
                </ul>
            </section>
            <hr className='end-section'></hr>
            <section>
                <h2>PROJECTS</h2>
                <hr className='start-section'></hr>
                <h4><a href='http://wisealley.africa/' target='_blank'>Wise Alley Web Application</a></h4>
                <h5>MatteBlk • October 2022 - November 2022</h5>
                <ul>
                    <li>Developed the web application using HTML, CSS, JavaScript, Symfony, and MySQL.</li>
                    <li>Collaborated with the designer, project manager, and other developers to develop the web application that met client requirements and project goals.</li>
                    <li>Managed the project timeline and communicated progress to the client.</li>
                </ul>
            </section>
            <hr className='end-section'></hr>
            <section>
                <h2>EDUCATION</h2>
                <hr className='start-section'></hr>
                <h4>Diploma in Information Technology (Communication Networks)</h4>
                <p>Nelson Mandela University • Port Elizabeth, South Africa • 2012</p>
                <br></br>
                <h4>Certificate in Advanced Digital Music Production and Music Business</h4>
                <p>Soul Candi Institute of Music • Johannesburg, South Africa • 2010</p>
                <h4>Full Stack Web Development</h4>
                <p>Hyperion Dev • Online Part-Time • 2022</p>
            </section>
            <hr className='end-section'></hr>
            <section>
                <h2>SKILLS</h2>
                <hr className='start-section'></hr>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node JS</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Restful API</li>
                </ul>
            </section>
            <hr className='end-section'></hr>
        </div>
    )
}

export default CV;