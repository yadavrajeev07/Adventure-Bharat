import React from 'react';
import './DashboardHome.css' // Ensure to style the new sections as needed

const DashboardHome = () => {
    return (
        <div className="dashboardhome-container">
            <h1>Dashboard Home</h1>
        <div className='dashboardhome-div'>
            <div className="dashboardhome-cards">
                <div className="cardhome">
                    <h2>Total Tours</h2>
                    <p>25</p>
                </div>
                <div className="cardhome">
                    <h2>Total Products</h2>
                    <p>15</p>
                </div>
                <div className="cardhome">
                    <h2>Registered Users</h2>
                    <p>500</p>
                </div>
                <div className="cardhome">
                    <h2>Upcoming Tours</h2>
                    <p>5</p>
                </div>
            </div>
            </div>
            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <ul>
                    <li>User A booked a tour.</li>
                    <li>User B reviewed a product.</li>
                    <li>User C signed up.</li>
                    <li>User D made a purchase.</li>
                </ul>
            </div>

            <div className="popular-tours">
                <h2>Popular Tours</h2>
                <ul>
                    <li>Trekking in the Himalayas</li>
                    <li>Wildlife Safari in Ranthambore</li>
                    <li>Beach Camping in Goa</li>
                    <li>Historical Tour of Rajasthan</li>
                </ul>
            </div>

            <div className="user-feedback">
                <h2>User Feedback</h2>
                <blockquote>
                    "An amazing experience! The guides were knowledgeable, and the scenery was breathtaking." - Avinash Kumar Panchal
                </blockquote>
                <blockquote>
                    "I loved the adventure tour! Highly recommend to anyone looking for excitement." - Amrit singh 
                </blockquote>
            </div>

            <div className="upcoming-events">
                <h2>Upcoming Events</h2>
                <ul>
                    <li>Adventure Camp: October 15, 2024</li>
                    <li>Photography Workshop: October 20, 2024</li>
                    <li>Mountain Climbing Expedition: November 5, 2024</li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardHome;
