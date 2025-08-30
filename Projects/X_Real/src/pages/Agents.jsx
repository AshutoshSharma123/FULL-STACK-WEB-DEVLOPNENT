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
        markers: 'true',
        scrub: true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePinOffset: true,
        onUpdate: (elem) => {

          const imageIndex = Math.floor(elem.progress * imgArray.length)
          imgRef.current.src = imgArray[imageIndex]

        }
      }

    })
  })

  return (
    <div className='parent w-full'>
      <div id='page1' className='py-1 w-full'>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl mt-[-50vh] rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
          <img ref={imgRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2] w-full'>
          <div className=' mt-[20vh] '>
            <h1 className='text-[30vw] text-center uppercase leading-[18vw]'>THE
              TEAM</h1>
          </div>
          <div className=' lg:mt-20 mt-4 p-1 sm:w-[40%] sm:mx-[60%]  w-full   flex flex-col justify-center items-center'>
            <p className=' sm:text-[2vw] text-[4vw] w-[70%] sm:text-right text-center text-light leading-tight'>A strong team of realty agents blends trust, market expertise, and client focus. Together, they navigate challenges, share insights, and achieve success by turning property goals into lasting relationships and results.</p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>
  )
}

export default Agents
