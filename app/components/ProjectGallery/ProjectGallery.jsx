"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { images, videos } from "./projects";
import "./ProjectGallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProjectGallery() {

    const [activeTab, setActiveTab] = useState("images");
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(0);
    const [open, setOpen] = useState(false);
    const dragData = useRef({});

const handlePointerDown = (e, rowIndex) => {
    dragData.current[rowIndex] = {
        startX: e.clientX,
        lastX: e.clientX,
        dragging: false
    };

    e.currentTarget.setPointerCapture(e.pointerId);
};

const handlePointerMove = (e, rowIndex) => {
    const data = dragData.current[rowIndex];

    if (!data) return;

    const movement = e.clientX - data.lastX;

    if (Math.abs(e.clientX - data.startX) > 8) {
        data.dragging = true;
    }

    if (data.dragging) {
        e.currentTarget.scrollLeft -= movement;
    }

    data.lastX = e.clientX;
};

const handlePointerUp = (e, rowIndex) => {
    const data = dragData.current[rowIndex];

    if (!data) return;

    data.dragging = false;

    e.currentTarget.releasePointerCapture?.(e.pointerId);
};
    /*
     * =====================================================
     * RANDOMIZE PROJECT IMAGES
     * =====================================================
     *
     * The order is randomized once when the component loads.
     */

    const [galleryImages, setGalleryImages] = useState([]);
    useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setGalleryImages(shuffled);
}, []);

    /*
     * =====================================================
     * SPLIT INTO EXACTLY 3 ROWS
     * =====================================================
     *
     * 34 images become:
     *
     * Row 1 = 12
     * Row 2 = 11
     * Row 3 = 11
     *
     * If you add/remove images later, the rows
     * automatically redistribute.
     */

    const rows = useMemo(() => {

    const total = galleryImages.length;

    const base = Math.floor(total / 3);

    const remainder = total % 3;

    const result = [];

    let start = 0;

    for (let i = 0; i < 3; i++) {

        const rowSize =
            base + (i < remainder ? 1 : 0);

        result.push(
            galleryImages.slice(
                start,
                start + rowSize
            )
        );

        start += rowSize;
    }

    return result;

}, [galleryImages]);


    /*
     * =====================================================
     * OPEN LIGHTBOX
     * =====================================================
     */

    const openImage = (item) => {

        const originalIndex =
            images.findIndex(
                (image) => image.id === item.id
            );

        setSelectedImage(
            originalIndex >= 0
                ? originalIndex
                : 0
        );

        setOpen(true);
    };


    return (

        <section
            id="projects"
            className="project-section"
        >

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="project-header">

                <p className="section-tag">
                    OUR COMPLETED PROJECTS
                </p>

                <h2>
                    Projects We've Successfully Delivered
                </h2>

                <p>
                    Explore our fencing projects completed
                    across South Tamil Nadu.
                </p>

            </div>


            {/* =================================================
                TABS
            ================================================= */}

            <div className="project-tabs">

                <button
                    className={
                        activeTab === "images"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActiveTab("images")
                    }
                >
                    Images
                </button>


                <button
                    className={
                        activeTab === "videos"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActiveTab("videos")
                    }
                >
                    Videos
                </button>

            </div>


            {/* =================================================
                IMAGE GALLERY
            ================================================= */}

            {activeTab === "images" && (

                <div className="project-marquee">

                    {rows.map((row, rowIndex) => (

                        <div
    className={`project-row ${
        rowIndex % 2 === 0
            ? "row-left"
            : "row-right"
    }`}
    key={rowIndex}
    onPointerDown={(e) =>
        handlePointerDown(e, rowIndex)
    }
    onPointerMove={(e) =>
        handlePointerMove(e, rowIndex)
    }
    onPointerUp={(e) =>
        handlePointerUp(e, rowIndex)
    }
    onPointerCancel={(e) =>
        handlePointerUp(e, rowIndex)
    }
>

                            <div className="project-row-track">

                                {/* FIRST COPY */}

                                {row.map((item) => (

                                    <div
                                        className="project-item"
                                        key={`${rowIndex}-${item.id}-1`}
                                        onClick={() =>
                                            openImage(item)
                                        }
                                    >

                                        <div className="project-image-wrap">

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                            />

                                            <div className="project-image-overlay">

                                                <span>
                                                    VIEW PROJECT
                                                </span>

                                            </div>

                                        </div>

                                        <div className="project-item-info">

                                            <h3>
                                                {item.title}
                                            </h3>

                                            <p>
                                                📍 {item.location}
                                            </p>

                                        </div>

                                    </div>

                                ))}


                                {/* SECOND COPY
                                    Creates seamless movement
                                */}

                                {row.map((item) => (

                                    <div
                                        className="project-item"
                                        key={`${rowIndex}-${item.id}-2`}
                                        onClick={() =>
                                            openImage(item)
                                        }
                                    >

                                        <div className="project-image-wrap">

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                            />

                                            <div className="project-image-overlay">

                                                <span>
                                                    VIEW PROJECT
                                                </span>

                                            </div>

                                        </div>

                                        <div className="project-item-info">

                                            <h3>
                                                {item.title}
                                            </h3>

                                            <p>
                                                📍 {item.location}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            )}


            {/* =================================================
                VIDEOS
            ================================================= */}

            {activeTab === "videos" && (

                <div className="video-gallery">

                    <video
                        key={selectedVideo}
                        controls
                        poster={
                            videos[selectedVideo].thumbnail
                        }
                        className="project-video"
                    >

                        <source
                            src={
                                videos[selectedVideo].video
                            }
                            type="video/mp4"
                        />

                        Your browser does not support
                        the video tag.

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

                        {videos.map((video, index) => (

                            <img
                                key={video.id}
                                src={video.thumbnail}
                                alt={video.title}
                                onClick={() =>
                                    setSelectedVideo(index)
                                }
                                className={
                                    selectedVideo === index
                                        ? "video-thumb active-video"
                                        : "video-thumb"
                                }
                            />

                        ))}

                    </div>

                </div>

            )}


            {/* =================================================
                LIGHTBOX
            ================================================= */}

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={selectedImage}
                slides={images.map((item) => ({
                    src: item.image,
                    alt: item.title,
                }))}
            />

        </section>

    );
}