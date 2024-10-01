import React from 'react';
import './PhotoGallery.css'; // Optional: Add custom styles if needed

const PhotoGallery = () => {
    const photos = [
        { id: 1, src: '/images/3202400.jpg', alt: 'Hiking in the mountains' },
        { id: 2, src: '/images/camping-adirondacks-6cbeacf2de7abd60.avif', alt: 'Camping by the lake' },
        { id: 3, src: '/images/whitewater_rafting_snake_river_wyoming_-min.jpg', alt: 'Whitewater rafting' },
        { id: 4, src: '/images/a-group-of-friends-hiking-through-a-moss-covered-forest-exploring-the-lush-gree-v7nlke6b.jpeg', alt: 'Exploring the forest' },
        { id: 5, src: '/images/_oakridge.jpg', alt: 'Biking on trails' },
        { id: 6, src: '/images/OIP (1).jpg', alt: 'Climbing a rock face' },
        { id: 7, src: '/images/Little-girl-on-a-zip-line-adventure-in-the-trees.webp', alt: 'Ziplining through the trees' },
        { id: 8, src: '/images/wp4511355-beautiful-mountain-scenery-wallpapers.jpg', alt: 'Scenic view from a mountain' },
    ];

    return (
        <div className="photo-gallery-container">
            <h1>Adventure Awaits Photo Gallery</h1>
            <div className="photo-gallery">
                {photos.map(photo => (
                    <div key={photo.id} className="photo-item">
                        <img src={photo.src} alt={photo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
