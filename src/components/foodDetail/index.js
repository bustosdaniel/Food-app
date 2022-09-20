import React, { useEffect, useState } from 'react'
import './index.css'
import Header from '../header'
import Footer from '../footer'
import Description from '../description'
import Icon from '../icon'
import {
  mdiStar,
  mdiHeartOutline,
  mdiCartPlus,
  mdiTruckOutline,
  mdiCalendarCheckOutline,
  mdiTagOutline
} from '@mdi/js'
import Spinner from '../spinner/index.js'
import { useParams } from 'react-router-dom'
import { GetFoodById } from '../../api'

const icon = [
  {
    id: 1,
    icon: { mdiStar }
  },
  {
    id: 2,
    icon: { mdiStar }
  },
  {
    id: 3,
    icon: { mdiStar }
  },
  {
    id: 4,
    icon: { mdiStar }
  },
  {
    id: 5,
    icon: { mdiStar }
  }
]

const form = [
  {
    id: 1,
    name: 'Buy 2 get 15 percent off'
  },
  {
    id: 2,
    name: 'Buy 3 get 25 percent off'
  },
  {
    id: 3,
    name: 'Buy 5 get 50 percent off'
  }
]

export default function FoodDetail() {
  const params = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  console.log(params)
  useEffect(() => {
    getFoodById(params.id, params.food)
  }, [])

  const getFoodById = (id, food) => {
    setLoading(true)
    GetFoodById(id, food)
      .then((response) => {
        setProduct(response[0])
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  console.log(product)

  return (
    <div className="detail-container">
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <section className="detail-section-container">
          <div className="detail-content">
            <div className="detail-image-content">
              <figure className="detail-image">
                <img src={product.img} alt="images" />
              </figure>
              <div className="detail-small-image-content">
                <figure className="detail-small-image">
                  <img src={product.img} alt="images" />
                </figure>
                <figure className="detail-small-image zoom-image">
                  <img src={product.img} alt="images" />
                </figure>
              </div>
            </div>
            <div className="detail-info-container">
              <div className="detail-info-content">
                <h2>{product.name}</h2>
                <div className="detail-info-rank">
                  {icon.map((item) => (
                    <Icon
                      path={mdiStar}
                      color="rgb(251 180 3)"
                      mr="3px"
                      size="18px"
                      key={item.id}
                    />
                  ))}
                  <p>{product.rate} Customer Reviews</p>
                </div>
                <p className="price">${product.price}</p>
                <div className="detail-info-place">
                  <p>Category: {params.food}</p>
                  <p>Country: {product.country} </p>
                </div>
                <p className="subcontent">{product.dsc}</p>
                <div className="detail-info-price">
                  <h4>Choose your options</h4>
                  <ul className="detail-price-form">
                    {form.map((item) => (
                      <li>
                        <input
                          type="radio"
                          id={item.id}
                          value="100"
                          name="mount"
                        />
                        <label htmlFor={item.id}>{item.name}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="detail-cart-container">
                <div className="detail-cart-plus">
                  <button>-</button>
                  <p>number</p>
                  <button>+</button>
                </div>
                <div className="detail-cart-button">
                  <button>
                    <Icon
                      path={mdiCartPlus}
                      mr="12px"
                      size="20px"
                      color="#FFF"
                    />
                    ADD TO CART
                  </button>
                </div>
                <div className="detail-icon">
                  <Icon path={mdiHeartOutline} color="gray" size="15px" />
                </div>
              </div>
              <div className="detail-product-container">
                <div className="detail-product-delivery">
                  <Icon
                    path={mdiTruckOutline}
                    color="#ff514e"
                    size="20px"
                    ml="5px"
                    mr="10px"
                  />
                  <p>Free global shipping on all orders</p>
                </div>
                <div className="detail-product-hours">
                  <Icon
                    path={mdiCalendarCheckOutline}
                    color="#ff514e"
                    size="20px"
                    ml="5px"
                    mr="10px"
                  />
                  <p>2 hours easy returns if you change your mind</p>
                </div>
                <div className="detail-product-ofert">
                  <Icon
                    path={mdiTagOutline}
                    color="#ff514e"
                    size="20px"
                    ml="5px"
                    mr="10px"
                  />
                  <p>Order before noon for same day dispatch</p>
                </div>
              </div>
            </div>
          </div>
          <section className="detail-description-container">
            <Description {...product} />
          </section>
        </section>
      )}

      <Footer />
    </div>
  )
}
