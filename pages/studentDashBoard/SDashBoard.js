import React from 'react'
import { Link } from "react-router-dom"

export default function SDashBoard() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <title>Dashboard | Job Lookup System</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto Sans|Saira|Roboto Slab" />
        <div className="header2">
          <div className="header-text-and-logo">
            <a className="header-text" href><img className="logo" src="../images/job-logo.png" />
            </a><div className="header-text"><a className="header-text" href>
                JOB LOOKUP</a>
            </div>
          </div>
          <div className="right-links">
            <div className="contact">
              <a className="contact" href="contact.html">CONTACT</a>
            </div>
            <div className="logout"><a className="logout" href>LOG OUT</a></div>
          </div>
        </div>
        <div className="sidebar">
          <p>
            <i className="fa-solid fa-gauge" /><Link to="/dashboard/student" className="dashboard">DASHBOARD</Link>
          </p>
          <p><i className="fa-solid fa-house" /><Link to="/dashboard/student/apply" className="Subject">Apply</Link></p>
          <p><i className="fa-solid fa-pen" /><a className="Exam" href>Attend</a></p>
          <p>
            <i className="fa-solid fa-square-poll-vertical" /><a className="Question" href>Result</a>
          </p>
        </div>
        <div className="footer">
          job PNG Designed By DuckOn from&nbsp;
          <a className="logo-attribute" href="https://pngtree.com/freepng/signal-job-logo-design-vector_4455067.html?sol=downref&id=bef">
            https://pngtree.com/freepng/signal-job-logo-design-vector_4455067.html?sol=downref&amp;id=bef</a>
        </div>
      </div>
  )
}
