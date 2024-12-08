import React, { useEffect, useState } from 'react'
import style from './Notfound.module.css'

import notFound from '../../assets/images/error.svg'
export default function Notfound() {
 
  return <>
{/* <div className='py-5'> */}
<img src={notFound} alt="error 404" className='mx-auto py-5' />
{/* </div> */}
  </>
}
