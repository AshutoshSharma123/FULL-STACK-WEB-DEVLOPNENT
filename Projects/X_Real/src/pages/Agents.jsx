// export default Agents
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Agents = () => {
  const imageDivRef = useRef(null)
  const imgRef = useRef(null)
  const imgArray = ['https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHw', 'https://images.unsplash.com/photo-1607569708758-0270aa4651bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D', 'https://plus.unsplash.com/premium_photo-1661255454444-13277f7679a9?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1580518337843-f959e992563b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWN0b3J8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1563208723-761ffcc18fbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFjdG9yfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        duration: 10,
        start: 'top 10%',
        end: 'top -100%',
        scrub: true,
        pin: true,
        onUpdate: (elem) => {

          const imageIndex = Math.floor(elem.progress * imgArray.length)
          imgRef.current.src = imgArray[imageIndex]

        }
      }

    })
  })

  return (
    <div className="">
      <div className="section1">
        {/* Pinned Image */}
        <div
          ref={imageDivRef}
          className="absolute w-[34%] h-[25%] sm:top-30 sm:left-90 sm:h-[20vw] sm:w-[14vw] rounded-2xl bg-red-500"
        >
          <img ref={imgRef}
            className="h-full w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww"
            alt=""
          />
        </div>

        {/* Text */}
        <div className="font-[font3] relative">
          <div className="text-[17vw] sm:mt-[30vh] sm:text-[14vw] text-center">
            The Team
          </div>
          <div className="text-center mx-auto sm:text-right w-[70%] sm:w-[45%] sm:mx-[52%]">
            <p className="sm:text-[2vw]">
              Our dedicated agents bring expertise, creativity, and commitment to
              every project. With deep industry knowledge and personalized
              service, they transform visions into reality, ensuring every client
              receives trusted guidance and exceptional results.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agents
