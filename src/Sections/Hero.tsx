// import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import CommingSoon from './CommingSoon'
import { useMaskSettings } from '../contsants'

const Hero = () => {
    const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();
    useGSAP(() => {

        gsap.set('.mask-wrapper', {
            maskPosition: initialMaskPos,
            maskSize: initialMaskSize,
        });

        gsap.set('.mask-logo', {
            marginTop: '-100vh',
            opacity: 0,
        });

        gsap.set('.entrance-message', {
            marginTop: '0vh',
        });

        // timeline Declaration
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                scrub: 2.5,
                end: '+=200%',
                pin: true,
            }
        });


        // timeline Animations
        tl.to('.fade-out', {
            opacity: 0,
            ease: 'power1.inOut',
        })
        
        .to('.scale-out', {
            scale: 1,
            ease: 'power1.inOut',
        })
        
        .to('.mask-wrapper', {
            maskSize: maskSize,
            maskPosition: maskPos,
            ease: 'power1.inOut',
        }, "<")
        
        .to('.mask-wrapper', {
            opacity: 0,
        })
        
        .to('.overlay-logo', {
            opacity: 1, 
            onComplete: () => {
                gsap.to('.overlay-logo', {
                    opacity: 0,
                });
            }
        }, "<")
        
        .to('.entrance-message', {
            duration: 1,
            ease: 'power1.inOut',
            maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)',
        }, "<");

    });
    return (
        <section className="hero-section">
            <div className="size-full mask-wrapper">
                <div className="mask-element">
                    <img
                        src="/images/hero-bg.webp"
                        alt="Hero GTA Background"
                        className="scale-out h-screen"
                    />
                    <img
                        src="/images/hero-text.webp"
                        alt="Hero-logo"
                        className="title-logo fade-out"
                    />
                    <img
                        src="/images/watch-trailer.png"
                        alt="trailer"
                        className="trailer-logo fade-out"
                    />
                    <div className="play-img fade-out">
                        <img
                            src="/images/play.png"
                            alt="play-button"
                            className='w-7 ml-1'
                        />
                    </div>
                </div>
            </div>
            <div>
                <img
                    src="/images/big-hero-text.svg"
                    alt="Logo"
                    className="size-full object-cover mask-logo"
                />
            </div>
            <div className='fake-logo-wrapper'>
                <img
                    src="/images/big-hero-text.svg"
                    alt="fake logo"
                    className="overlay-logo"
                />
            </div>
            <CommingSoon />
        </section>
    )
}

export default Hero