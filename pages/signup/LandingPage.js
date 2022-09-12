import React from 'react'
import "./LandingPage.css"
import {Link} from "react-router-dom"
export default function LandingPage() {
          return (
            <div>
              <meta charSet="UTF-8" />
              <title>Welcome! | Job Lookup System</title>
              <link href="../css/landing-page.css" rel="stylesheet" />
              
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto Sans|Saira|Roboto Slab|Convergence|Zen Kaku Gothic New" />
      
              <div className="hero">
                <div className="header3">
                  <div className="header-text-and-logo">
                    <a className="header-text" href><img className="logo" src="../images/job-logo.png" /></a>
                    <a className="header-text" href>
                      <div className="header-text">JOB LOOKUP</div></a>
                  </div>
                  <div className="right-links">
                    <div className="about">
                      <a className="about" href>ABOUT US</a>
                    </div>
                  </div>
                </div>
                <div className="applicant">
                  <div className="applicant-text">
                    <div className="hero-heading1">
                      <h1 className="hero-heading1">Find your dream Job!</h1>
                    </div>
                    <div className="hero-text">
                      Explore the wonderful and exciting job opportunities from hundreds
                      of companies everywhere, based on your interests or study major.
                      Sign up, build your CV and choose the job of your choice today!
                    </div>
                  </div>
                  <div className="button">
                    <Link to="/user_login"><button className="bn632-hover bn24">
                        <div className="applicant-button">
                          <div><i className="fa-solid fa-user" /></div>
                          <div>APPLICANT</div>
                        </div>
                      </button></Link>
                  </div>
                </div>
                <div className="business">
                  <div className="button">
                    <Link to="/agent_login"><button className="bn632-hover bn19">
                        <div className="business-button">
                          <div><i className="fa-solid fa-briefcase" /></div>
                          <div>BUSINESS</div>
                        </div>
                      </button></Link>
                  </div>
                  <div className="business-text">
                    <div className="hero-heading2">
                      <h1 className="hero-heading2">Need Employees?</h1>
                    </div>
                    <div className="hero-text">
                      Just started your own company? Is your company understaffed or needs
                      better employees? Sign up today through our business exclusive login
                      and find the best applicants around for your company!
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                job PNG Designed By DuckOn from&nbsp;
                <a className="logo-attribute" href="https://pngtree.com/freepng/signal-job-logo-design-vector_4455067.html?sol=downref&id=bef">
                  https://pngtree.com/freepng/signal-job-logo-design-vector_4455067.html?sol=downref&amp;id=bef</a>
              </div>
            </div>
          );
        }
