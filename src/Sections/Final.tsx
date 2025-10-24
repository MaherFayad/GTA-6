import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Final = () => {
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
        useGSAP(() => {
        gsap.set('.final-content', {
            opacity: 0,
        });
        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.final',
        //         start: 'top top',
        //         scrub: true,
        //         pin: true,
        //         end: '90% top',
        //     }
        // });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.final',
                start: 'top top',
                scrub: true,
                pin: true,
                end: '90% top',
            }
        });
        tl.to('.final-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });

        if (videoRef.current) {
            // use the correct DOM event name 'onloadedmetadata' and guard against null
            videoRef.current.onloadedmetadata = () => {
                if (videoRef.current) {
                    tl.to(videoRef.current, {
                        currentTime: videoRef.current.duration,
                        duration: 1,
                        ease: 'power1.inOut',
                    }, "<");
                }
            };
        }
    });
    return (
        <section className="final">
            <div className="final-content size-full">
                <video
                    ref={videoRef}
                    src="/videos/output3.mp4"
                    className="size-full object-cover"
                    playsInline
                    muted
                    preload='auto'
                />
            </div>
        </section>

    )
}

export default Final