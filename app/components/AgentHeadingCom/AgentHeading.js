"use client"

import React from 'react'
import SearchInput from '../Common/SearchInput'
import Button from '../Common/Button'

export default function AgentHeading({title}) {
  return (
    <div className='agent-heading'>
        <div className="flex search-box">
          <SearchInput />
          <button type="button">Search</button>
        </div>
        <h4>{title}</h4>
        <p>এজেন্টদের সাথে ম্যাসেনজার ও হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।</p>
    </div>
  )
}
