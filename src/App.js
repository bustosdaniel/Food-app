import './App.css'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from './components/spinner'
import Footer from './components/footer'
import Header from './components/header'
import SideBar from './components/sideBar'
import Card from './components/card'
import Select from './components/select'
import useFetch from './hooks/useFetch'
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'
import Icon from './components/icon'

function App() {
  const params = useParams()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')

  const { loading, data } = useFetch({ page: currentPage, search })

  const handleClick = (product) => {
    handleProductDetail(product.id)
  }

  const handleProductDetail = (productId) => {
    navigate({
      pathname: `/${params.food}/${productId}`
    })
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleSearch = (event) => {
    const value = event.target.value
    setValue(value)
  }

  const handleKeyPress = (event) => {
    console.log(event)
    if (event.keyCode === 13) {
      setSearch(value)
      setCurrentPage(1)
      navigate({
        pathname: '/our-foods'
      })
    }
  }

  console.log(data)

  return (
    <div className="App">
      <Header />
      <section className="section-container">
        <SideBar />
        <section className="section-container-content">
          <div className="section-content-form">
            <div className="section-form">
              <input
                type="text"
                placeholder="Search your product"
                onChange={handleSearch}
                onKeyDown={handleKeyPress}
                value={value}
              />
            </div>
            <Select />
          </div>
          <div className="section-info">
            {loading ? (
              <Spinner />
            ) : (
              <>
                {data.length > 0 ? (
                  data.map((item) => (
                    <Card handleClick={handleClick} {...item} />
                  ))
                ) : (
                  <div className="loading-container">
                    <figure className="loading-image">
                      <img
                        src="https://food-g-app.web.app/static/media/empty-shop.e78970f0.svg"
                        alt=""
                      />
                    </figure>
                    <p>There Is No Product You Are Looking For 🕵️</p>
                  </div>
                )}
              </>
            )}
          </div>
          {data.length > 0 && (
            <div className="btn-container-page">
              <button className="btn-previous" onClick={previousPage}>
                <Icon path={mdiChevronLeft} />
              </button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button className="btn-next" onClick={nextPage}>
                <Icon path={mdiChevronRight} />
              </button>
            </div>
          )}
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App
