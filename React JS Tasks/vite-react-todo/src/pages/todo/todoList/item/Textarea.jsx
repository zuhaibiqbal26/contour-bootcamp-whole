import React from 'react'

function Textarea({onChange, text}) {
  return (
    <textarea rows="10" cols="10" onChange={onChange} text={text}></textarea>
  )
}

export default Textarea