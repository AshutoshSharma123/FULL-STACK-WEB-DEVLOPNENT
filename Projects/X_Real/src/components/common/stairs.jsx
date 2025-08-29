// import React, { useRef } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'


// const Stairs = () => {
//     const stairParent = useRef(null)
//     // useGSAP(() => {


//     //     const tl = gsap.timeline()

//     //     tl.from(stairParent.current, {
//     //         display: 'block'
//     //     })


//     //     tl.from('.stair', {
//     //         height: 0,
//     //         stagger: {
//     //             amount: -0.2
//     //         }
//     //     })

//     //     tl.to('.stair', {
//     //         y: '0%',

//     //     })

//     //     tl.to(stairParent.current, {
//     //         display: 'none'
//     //     })


//     // })

//     useGSAP(() => {
//         const tl = gsap.timeline()

//         // Ensure stairs are visible at start
//         gsap.set(stairParent.current, { opacity: 1 })

//         // Stairs drop down (like growing height)
//         tl.from(".stair", {
//             scaleY: 0,                // use transform instead of height
//             transformOrigin: "top",   // drop down effect
//             stagger: 0.2,
//             duration: 0.8,
//             ease: "power2.out"
//         })

//         // Hold for a moment (like your tl.to('.stair', { y: '0%' }))
//         tl.to(".stair", {
//             y: "0%",
//             duration: 0.3,
//             stagger: 0.2,

//         })

//         // Fade + remove stairs container
//         tl.to(stairParent.current, {
//             opacity: 0,
//             duration: 0.6,
//             onComplete: () => {
//                 stairParent.current.style.display = "none"
//             }
//         })
//     })

//     return (
//         <div ref={stairParent} className="text-white top-0 w-full h-screen fixed  z-20">


//             {/* solid background so nothing shows through before animation */}


//             <div className="text-white  w-full h-full fixed flex">
//                 <div className="stair h-full w-1/5 bg-black"></div>
//                 <div className="stair h-full w-1/5 bg-black"></div>
//                 <div className="stair h-full w-1/5 bg-black"></div>
//                 <div className="stair h-full w-1/5 bg-black"></div>
//                 <div className="stair h-full w-1/5 bg-black"></div>
//             </div>
//         </div>
//     )
// }

// export default Stairs




import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.2
        })
    }, [currentPath])


    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs