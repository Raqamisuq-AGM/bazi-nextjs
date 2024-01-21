"use client"

import Link from 'next/link'
export default function LinkTag({path, name}) {
  return (
    <Link href={path? path : "/"}>{name}</Link>
  )
}


