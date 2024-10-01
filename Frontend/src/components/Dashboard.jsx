import React from 'react';
import './Dashboard.css'; // Import your CSS for styling
import { Link } from 'react-router-dom'; // Assuming you're using React Router



const Dashboard = () => {


  return (
   <>
  
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Adventure Awaits</h2>
        <ul>
          <li><Link to="/DashboardHome"> DashBoard Home</Link></li>
          <li><Link to="/recent-bookings">Recent Bookings</Link></li> {/* Link to Recent Bookings */}
          <li><a href="/Destinations">Destinations</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><Link to='/HeroSection'>Home</Link></li>
          <div>
               
            </div>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Topbar */}
        <div className="topbar">
          <div className='col'><h4>After Login Stay With DashBoard</h4></div>
          <div className='col'><h1>Welcome to Adventure Awaits Dashboard</h1></div>
          <div className="profile-section">
            <span className="username"></span>
            <img src="/images/adventure bharat.webp" alt="Profile" className="profile-pic" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="card">
          <Link to="/Recentbookings"><h3>Recent Bookings</h3></Link> 
            <p>Check the recent bookings made by users.</p>
          </div>
          <div className="card">
            <h3>Upcoming Destinations</h3>
            <p>Explore the top-rated destinations users are interested in.</p>
          </div>
          <div className="card">
            <h3>Statistics</h3>
            <p>View tourist statistics and trends.</p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Dashboard;
