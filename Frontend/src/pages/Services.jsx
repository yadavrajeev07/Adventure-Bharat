import React from 'react';
import '../pages/Services.css'; // Optional: Add custom styles if needed

const Services = () => {
    return (
        <div className="services-container">
            <h1>Explore Our Tour Services</h1>
            <p>At Adventure Awaits, we offer a variety of tours and adventure packages to suit your travel needs.</p>
            
            <div className="service-list">
                <div className="service-item">
                    <h2>Guided Adventure Tours</h2>
                    <p>Join our expert guides on thrilling adventures through mountains, forests, and rivers. Perfect for both novice and experienced explorers.</p>
                </div>
                <div className="service-item">
                    <h2>Customizable Travel Packages</h2>
                    <p>Design your own adventure with our customizable travel packages. Choose the destination, activities, and pace that best suit your style.</p>
                </div>
                <div className="service-item">
                    <h2>Solo and Group Packages</h2>
                    <p>Whether you’re traveling alone or with a group, we offer exclusive packages to ensure an unforgettable experience for all.</p>
                </div>
                <div className="service-item">
                    <h2>Extreme Adventures</h2>
                    <p>For thrill-seekers, we offer extreme sports like bungee jumping, skydiving, and whitewater rafting.</p>
                </div>
                <div className="service-item">
                    <h2>Family-Friendly Tours</h2>
                    <p>Our family-friendly packages ensure safe and fun adventures for travelers of all ages, with special activities for kids.</p>
                </div>
                
                <div className="service-item">
                    <h2>Cultural Experiences</h2>
                    <p>Immerse yourself in local cultures with our curated cultural tours that include food tastings, workshops, and local guides.</p>
                </div>
                <div className="service-item">
                    <h2>Wildlife Safaris</h2>
                    <p>Explore nature's wonders on our wildlife safaris, offering guided tours through national parks and reserves to see exotic animals.</p>
                </div>
                <div className="service-item">
                    <h2>Adventure Photography Packages</h2>
                    <p>Capture your adventures with our photography packages, including a professional photographer to document your journey.</p>
                </div>
                <div className="service-item">
                    <h2>Weekend Getaways</h2>
                    <p>Take a break from the routine with our specially designed weekend getaway packages to breathtaking locations.</p>
                </div>
                <div className="service-item">
                    <h2>Eco-Tours</h2>
                    <p>Join us for eco-friendly tours focused on sustainable travel practices, wildlife conservation, and environmental education.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
