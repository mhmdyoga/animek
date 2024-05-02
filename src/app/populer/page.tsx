"use client"

import React, { useEffect, useState } from 'react'
import HeaderTopAnime from '../components/HeaderTopAnime'
import Pagination from '../components/Pagination'
import Beranda from '../beranda/page'

const PopulerAnime = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])
  const fetchDataAll = async() => {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const data: any = await respone.json()
    setTopAnime(data)
  }

  useEffect(() => {
    fetchDataAll()
  },[page])

  return (
    <>
    <div>
      <HeaderTopAnime title={`Anime Terpopuler #${page}`}/>
      <Beranda api={topAnime}/>
      <Pagination page={page} setPage={setPage}/>
    </div>
  </>
  )
}

export default PopulerAnime