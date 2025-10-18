import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const SecondVideo = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useGSAP(() => {
        gsap.set('.lucia', {
            marginTop: '-60vh',
            opacity: 0,
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.lucia',
                start: 'top top',
                scrub: 2,
                pin: true,
                end: 'bottom top',
            }
        });
        tl.to('.lucia', { opacity: 1, duration: 0.5, ease: 'power1.inOut' });

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
        }
    });

    return (
        <section className="lucia">
            <div className="h-dvh">
                <video
                    ref={videoRef}
                    src="/videos/output2.mp4"
                    className="size-full object-cover second-vd"
                    playsInline
                    muted
                    preload='auto'
                />
            </div>
        </section>
    )
}

export default SecondVideo