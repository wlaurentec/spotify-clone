import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="my-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className='flex overflow-auto'>

        {albumsData.map((item, index) => (
          <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
        </div>
      </div>
      <div className="my-4">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
        <div className='flex overflow-auto'>

        {songsData.map((item, index) => (
          <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
