import React from 'react'

const Pagination = ({ page, setPage }: any) => {
 
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  const HandlerNextPage = () => {
    setPage((nextpage: any) => nextpage + 1)
    scrollTop()
  }
  const HandlerPrevPage = () => {
    setPage((prevpage: any) => prevpage - 1)
    scrollTop()
  }
  return (
    <div className='flex justify-center items-center gap-4 text-white'>
      {page <= 1 ? null : 
       <button className='text-white font-medium text-xl transition-all hover:text-orange-400' onClick={HandlerPrevPage}>Prev</button>
      }   
      <h4>{page} of 1037</h4>
      <button className='text-white font-medium text-xl transition-all hover:text-orange-400' onClick={HandlerNextPage}>Next</button>
    </div>
  )
}

export default Pagination