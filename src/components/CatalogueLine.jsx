import React from 'react'
import Catalogue from './Catalogue'

const CatalogueLine = (props) => {
  return (
    <div className='CatalogueLine'>
    {
      props.cardtitle.map((val,idx)=>(
        <Catalogue title={val.title} 
                    url = {val.url} subtitle={val.subtitle} size = {val.size}/>
      ))
    }
    </div>
  )
}

export default CatalogueLine
