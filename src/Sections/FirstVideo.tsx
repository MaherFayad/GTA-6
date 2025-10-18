import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

function FirstVideo() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useGSAP(() => {
        gsap.set('.first-vd-wrapper', {
            marginTop: '-150vh',
            opacity: 0,
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.first-vd-wrapper',
                start: 'top top',
                scrub: true,
                pin: true,
                end: '+=200% top',
            }
        });

        tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' });
        tl.to('.first-vd-wrapper', { opacity: 1, duration: 0.5, ease: 'power1.inOut' });

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
        <section className="first-vd-wrapper">
            <div className="h-dvh">
                <video
                    ref={videoRef}
                    src="/videos/output1.mp4"
                    className="first-vd"
                    playsInline
                    muted
                    preload='auto'
                />
            </div>
        </section>
    )
}

export default FirstVideo