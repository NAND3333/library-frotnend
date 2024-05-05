import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        
A Library Management System (LMS) is a software solution designed to streamline the operations of a library, enhancing efficiency and user experience. It typically includes modules for cataloging, circulation, patron management, acquisitions, and reporting. LMS enables librarians to automate routine tasks such as cataloging new materials, managing loan transactions, and tracking overdue items. For patrons, it offers features like online catalog search, self-checkout, reservation requests, and account management. Additionally, LMS often integrates with digital resources, allowing users to access e-books, databases, and multimedia materials seamlessly. With its comprehensive functionalities, an LMS optimizes library workflows, improves accessibility to resources, and enhances the overall management and user experience.
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
