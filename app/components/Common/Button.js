"use client"

import React from 'react'

export default function Button({BtnFunction, name}) {
  return (
    <div className='button'>
        <button>{name}</button>
    </div>
  )
}
