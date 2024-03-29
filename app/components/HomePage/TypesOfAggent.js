"use client"

import Link from 'next/link';
import React from 'react'

export default function TypesOfAggent() {

  return (
    <div className='content-area'>
        <div className='title p-5  text-center rounded-3'>
            <h2>এজেন্ট কয় প্রকারঃ</h2>
        </div>

        <div className='content-body'>
          <p> <Link href=""> অনলাইন সুপার এজেন্ট লিস্টঃ</Link>  সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি এডমিন কে জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট দেয়া আছে। <Link href="">অনলাইন মাষ্টার এজেন্ট লিস্টঃ</Link>  অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে।   বিস্তারিত জানতে আমাদের ফেসবুক গ্রুপে ক্লিক করুন। লোকাল মাষ্টার এজেন্ট লিস্টঃ লোকাল মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কিন্তু তাদের সাথে লেনদেন প্রতিটি ইউজার কে নিজ দায়িত্বে লেনদেন করতে হবে। তাদের নামে কোন অভিযোগ কারো কাছে করা যাবে না। 
          <Link href=""> লোকাল মাষ্টার এজেন্টঃ</Link>   এই সব এজেন্ট সাধারনত – নিজের এলাকায় বা পরিচিত দের সাথে লেনদেন করে । যারা আগে বাজি ধরিয়ে দিত, তাদের কেই মুলত লোকাল এজেন্ট দেয়া হয়েছে। লোকাল এজেন্ট রা অনলাইনে আসে না এবং তারা তাদের পরিচয় গোপন রাখতে চায়। লোকাল এজেন্ট দের সাথে অনলাইনে কোন ভাবেই লেনদেন করবেন না, আর করে থাকলে তার দায়ভার পুরোটাই আপনার।</p>          
        </div>
    </div>
  )
}

