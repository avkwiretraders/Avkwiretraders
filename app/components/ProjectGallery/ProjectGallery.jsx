"use client";

import { useState, useEffect } from "react";
import { images, videos } from "./projects";
import { useRef } from "react";
import "./ProjectGallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectGallery() {

    const [activeTab, setActiveTab] = useState("images");

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVideo,setSelectedVideo]=useState(0);
    const [open, setOpen] = useState(false);
    const [paused, setPaused] = useState(false);
    const [fade, setFade] = useState(true);
    const thumbRef = useRef(null);
    const touchStartX = useRef(0);

useEffect(() => {

    if (paused) return;

    const interval = setInterval(() => {

        nextImage();

    }, 8000);

    return () => clearInterval(interval);

}, [selectedImage, paused]);

useEffect(() => {

    const handleKeyDown = (event) => {

        if (event.key === "ArrowRight") {

            nextImage();

        }

        if (event.key === "ArrowLeft") {

            prevImage();

        }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {

        window.removeEventListener("keydown", handleKeyDown);

    };

}, []);

useEffect(() => {
    setFade(false);

    const timer = setTimeout(() => {
        setFade(true);
    }, 50);

    return () => clearTimeout(timer);
}, [selectedImage]);
    const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
};

const prevImage = () => {
    setSelectedImage((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
    );
};
    return (

        <section id="projects" className="project-section">

            <div className="project-header">

                <p className="section-tag">
                    OUR COMPLETED PROJECTS
                </p>

                <h2>
                    Projects We've Successfully Delivered
                </h2>

                <p>
                    Explore our fencing projects completed across
                    South Tamil Nadu.
                </p>

            </div>

            <div className="project-tabs">

                <button

                   className={activeTab === "images" ? "active" : ""}

                    onClick={()=>setActiveTab("images")}

                >

                    Images

                </button>

                <button

                    className={activeTab === "videos" ? "active" : ""}

                    onClick={()=>setActiveTab("videos")}

                >

                    Videos

                </button>

            </div>

            {

                activeTab==="images" &&

                <>
            <div
    className="featured-image"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
    }}
    onTouchEnd={(e) => {
        const diff =
            touchStartX.current - e.changedTouches[0].clientX;

        if (diff > 60) nextImage();
        if (diff < -60) prevImage();
    }}
>

    <button
        className="gallery-arrow left-arrow"
        onClick={prevImage}
    >
        ❮
    </button>

    <div className="image-counter">
        {selectedImage + 1} / {images.length}
    </div>

    <img
    src={images[selectedImage].image}
    alt={images[selectedImage].title}
    className={fade ? "fade-in" : "fade-out"}
    onClick={() => setOpen(true)}
/>
    <div className="image-overlay">

    <h3>{images[selectedImage].title}</h3>

    <p>📍 {images[selectedImage].location}</p>

</div>
    <button
        className="gallery-arrow right-arrow"
        onClick={nextImage}
    >
        ❯
    </button>

</div>
            

                    <div className="thumbnail-wrapper">

    <button
        className="thumb-arrow left"
        onClick={() => {
    const thumb = thumbRef.current.querySelector(".thumb");
    thumbRef.current.scrollBy({
        left: -(thumb.offsetWidth + 16),
        behavior: "smooth",
    });
}}
    >
        ❮
    </button>

    <div className="thumbnail-row" ref={thumbRef}
>

        {images.map((item, index) => (

            <img
                key={item.id}
                src={item.image}
                alt={item.title}
                onClick={() => setSelectedImage(index)}
                className={
                    selectedImage === index
                        ? "thumb active-thumb"
                        : "thumb"
                }
            />

        ))}

    </div>

    <button
        className="thumb-arrow right"
       onClick={() => {
    const thumb = thumbRef.current.querySelector(".thumb");
    thumbRef.current.scrollBy({
        left: thumb.offsetWidth + 16,
        behavior: "smooth",
    });
}}
    >
        ❯
    </button>

</div>

                </>

            }

            {

                activeTab==="videos" &&

                <div className="video-gallery">

<video
key={selectedVideo}
    controls
    poster={videos[selectedVideo].thumbnail}
    className="project-video"
>

    <source
        src={videos[selectedVideo].video}
        type="video/mp4"
    />

    Your browser does not support the video tag.

</video>

<div className="video-info">

<h3>

{videos[selectedVideo].title}

</h3>

<p>

📍 {videos[selectedVideo].location}

</p>

</div>

<div className="video-thumbnails">

{

videos.map((video,index)=>(

<img

key={video.id}

src={video.thumbnail}

alt={video.title}

onClick={()=>setSelectedVideo(index)}

className={
selectedVideo===index
?
"video-thumb active-video"
:
"video-thumb"
}

/>

))

}

</div>

</div>

            }
            <Lightbox
    open={open}
    close={() => setOpen(false)}
    index={selectedImage}
    slides={images.map((item) => ({
        src: item.image,
    }))}
/>
        </section>

    );

}