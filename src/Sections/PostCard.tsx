// import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const PostCard = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useGSAP(() => {
        gsap.set('.animated-gradient-bg', {
            opacity: 0,
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.post-card',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        })
        tl.to('.animated-gradient-bg', {
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut',
        });
        if (videoRef.current) {
            // use the correct DOM event name 'onloadedmetadata' and guard against null
            videoRef.current.onloadedmetadata = () => {
                if (videoRef.current) {
                    tl.to(videoRef.current, {
                        currentTime: videoRef.current.duration,
                        duration: 3,
                        ease: 'power1.inOut',
                    }, "<");
                }
            };
        };
    });



    return (
        <section className="post-card">
            <div className="animated-gradient-bg" />
            <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] tansition-duration-700">
                <img src="/images/overlay.webp" alt="postcard" />
                <video
                    ref={videoRef}
                    muted
                    // autoPlay
                    playsInline
                    preload='auto'
                    src="/videos/postcard-vd.mp4" />
                <button className="group-hover:bg-yellow transation duration-700" > Explore Leonida Keys </button>
            </div>
        </section>
    )
}

export default PostCard