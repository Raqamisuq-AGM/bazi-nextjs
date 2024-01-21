import React from 'react'

export default function CommonTable({header, trData}) {
  return (
    <div className=''>
        <table  className='table'>
            <thead>
                {
                    header.map((items, i) =>{
                        return(
                            <th key={i}>{items}</th>
                        )
                    })
                }
            </thead>
            <tbody>
                {
                    // trData.map((items, i)=>{
                    //     return(
                    //         <tr className='' key={i}>
                            
                    //         </tr>
                    //     )  
                    // })
                }
            </tbody>
        </table>
    </div>
  )
}
