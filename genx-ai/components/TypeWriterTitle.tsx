"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter)=>{
        typewriter.typeString("Integrated With AI")
        .pauseFor(2000).deleteAll()
        .typeString("Can Generate All Your Media Types")
        .pauseFor(2000).deleteAll()
        .typeString("The Best AI in Town")
        .pauseFor(2000).deleteAll()
        .start()
      }}
    />
  )
}

export default TypeWriterTitle