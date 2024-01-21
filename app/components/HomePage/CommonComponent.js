"use client"

import React from 'react'
import Link from 'next/link';
import LinkTag from '../Common/Link';

export default function CommonComponent({title, body, firstA,firstPath,
lastA, lastPath,btnName, btnPath, li1, li2, li3, listItems}) {

console.log(!lastPath? " " : lastPath)






// const {} = props;
  return (
    <div className='content-area'>
        <div className='title p-5 text-white text-center rounded-3'>
            <h2>{title}</h2>
        </div>

        <div className='content-body'>
        {
          body? <p>
                <Link href={""} >{firstA}</Link>
                {body}
              {
                lastPath?  <LinkTag path={lastPath}  name={lastA}/> : ""
              }
            </p> : null
        }
        {
            listItems ? 
            <div className='list-items'>
                <ul>
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                </ul>
            </div> : null
        }
        
            
          <div>
             {
                    btnName ?  <div className="button">
                        <Link href={btnPath} >
                        <button>{btnName}</button>
                         </Link> 
                     </div> :""
           }
          </div>
          
        </div>
    </div>
  )
}
