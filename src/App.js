import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src="assets/images/profile.png" alt="" />
                <h1 className="name">Shubham Raj</h1>
                <h3 className="tagline">Software Engineer,</h3>
				<h3 className="tagline">Data Scientist,</h3>
				<h3 className="tagline">Full Stack Developer</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fas fa-envelope"></i><a href="mailto: shubham14p3@gmail.com">shubham14p3@gmail.com</a></li>
                    <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">+91 80927 66575</a></li>
                    <li className="website"><i className="fas fa-globe"></i><a href="https://www.shubhamraj.dev" target="_blank">shubhamraj.dev</a></li>
                    <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/shubham14p3/" target="_blank">linkedin/in/shubham14p3</a></li>
                    <li className="github"><i className="fab fa-github"></i><a href="https://github.com/shubham14p3" target="_blank">github.com/shubham14p3</a></li>
                   
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                <div className="item">
                    <h4 className="degree">BE in Computer Science Engineering</h4>
                    <h5 className="meta">C.S.V.T.U from B.I.T.</h5>
                    <div className="time">2014 - 2018</div>
                </div>
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    <li>English <span className="lang-desc">(Professional)</span></li>
					<li>Hindi <span className="lang-desc">(Native)</span></li>
                </ul>
            </div>
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    <li>Tracking</li>
                    <li>Coding</li>
                   
                </ul>
            </div>
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                <div className="summary">
                    <p>I'm a Data Scientist, Software Engineer and Full Stack Develpoer from Benagluru, IN. I aim to make a difference through my creative solution.
					   Worked with project teams to create user-friendly and appealing application interfaces and websites for users. Met with project manager, business analyst and architect right from beginning of project, creating rough mock-ups that were refined and extended over many iterations.</p>
                </div>
            </section>
            
            <section className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Junior Data Scientist (Consultant/Intern)</h3>
                            <div className="time">25-07-2019 - Present</div>
                        </div>
                        <div className="company">Datamites Pvt. Ltd., Bangalore</div>
                    </div>
                    <div className="details">
                        <p>Worked in Data Cleaning, Visualization and Neural Networks.Well versed with predictive modelling, data processing, and data mining algorithms to solve challenging business problems. 
						   Involved in Python open source community and passionate about brining machine learning, deep reinforcement learning to Business.</p>
                    </div>
                </div>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Software Engineer</h3>
                            <div className="time">07-2018 - 07-19</div>
                        </div>
                        <div className="company">Nagravision India Pvt. Ltd., Bangalore</div>
                    </div>
                    <div className="details">
                        <p>Responsible for handling many client projects, end to end under manager. Taken lead of over 8+ feature in last 8 months.Built infrastructure to handle files in proprietary systems.Built many robust code that help in companies testing stability. 
						   Reduced 55% of error code by developing robust code in Python. Built python script into new product features to achieve 85% compliance with industry best practices. Working in Agile environment. </p>  
                        
                    </div>
                </div>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Full Stack Developer</h3>
                            <div className="time">Freelancing</div>
                        </div>
                        <div className="company">Multiple</div>
                    </div>
                    <div className="details">
                        <p>Have created many freelancing project such as Minusoft, CleanKing, fillurbasket etc. Development tools used so far are React, Html5, CSS, Bootstrap, Ruby, MongoDB and MySql</p>  
                    </div>
                </div>
                
            </section>
            
            <section className="section projects-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                <div className="intro">
                    <p>My work can be seen in github which are as follow.</p>
                </div>
                <div className="item">
                    <span className="project-title"><a href="https://shubham14p3.github.io/Apple-Clone/">Apple</a></span> - <span className="project-tagline">A clone of 2014 Apple website written in HTML, using CSS for styling..</span>                    
                </div>
                <div className="item">
                    <span className="project-title"><a href="https://shubham14p3.github.io/newyork-times-clone/" target="_blank">The New York Times</a></span> - 
                    <span className="project-tagline">A clone of a New York Times article page written in HTML, using CSS for styling.</span>
                </div>
                <div className="item">
                    <span className="project-title"><a href="https://shubham14p3.github.io/newsweek-clone/" target="_blank">Newsweek</a></span> - 
					<span className="project-tagline">This project requests students to build a replica of the news site Newsweek.com using the Bootstrap framework.</span>
                </div>
                <div className="item">
                    <span className="project-title"><a href="https://shubham14p3.github.io/Online-shop-for-electronics/" target="_blank">Online-shop-for-electronics</a></span> - <span className="project-tagline">The project is to build for the HTML & CSS Capstone Project which is based on an online shop. But I have personalised the content, i.e., instead of a shop of electronics I have created a study website "N.I.S.E. Comp". It is an website where contents can be bought through digital means, and knowledge can be shared digitally. </span>
                </div>
                <div className="item">
                    <span className="project-title"><a href="https://shubhamraj.dev" target="_blank">Portfolio</a></span> - <span className="project-tagline">AN Seft created Resume boiler template to showcase own strengths. </span>
                </div>
				<div className="item">
                    <span className="project-title"><a href="https://minusoft.co.in" target="_blank">Minusoft</a></span> - <span className="project-tagline">Websites  for an E-commerce website which target for Antivirus software.</span>
                </div>
				<div className="item">
                    <span className="project-title"><a href="http://cleanking.in/1/" target="_blank">CleanKing</a></span> - <span className="project-tagline">Cleaning Services tempelate created to showcase the user, to get services booked online, also get knowledge of the client.</span>
                </div>
            </section>
            
            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                <div className="skillset">        
                    <div className="item">
                        <h3 className="level-title">Python &amp; Data Science</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                               
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Text Mining </h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                              
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Visualisation</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "68%"}}aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                 
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">HTML5 &amp; CSS</h3>
                        <div className="progress level-bar">
							    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">React</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                  
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Sketch &amp; Photoshop</h3>
                        <div className="progress level-bar">
							<div className="progress-bar theme-progress-bar" role="progressbar" 
							style={{width: "85%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                 
                    </div>
                    
                </div>  
            </section>
            
        </div>
    </div>
 
  );
}

export default App;
