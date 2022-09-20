import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  GetFood,
  GetBurger,
  GetBread,
  GetSandwich,
  GetDrink,
  GetPizza,
  GetBestFood,
  GetBbqs,
  GetChocolate,
  GetDessert,
  GetFriedChicken,
  GetIceCream,
  GetPork,
  GetSausage,
  GetStake
} from '../api'

export const ENDPOINTS = {
  'our-foods': GetFood,
  burgers: GetBurger,
  breads: GetBread,
  sandwiches: GetSandwich,
  drinks: GetDrink,
  pizzas: GetPizza,
  'best-foods': GetBestFood,
  bbqs: GetBbqs,
  chocolates: GetChocolate,
  desserts: GetDessert,
  'fried-chicken': GetFriedChicken,
  'ice-cream': GetIceCream,
  porks: GetPork,
  sausages: GetSausage,
  steaks: GetStake
}

export default function useFetch({ page = '1', search }) {
  const navigate = useNavigate()
  const params = useParams()
  const [error, setError] = useState()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const endpoint = params.food

  useEffect(() => {
    getData()
  }, [endpoint, page, search])

  const getData = () => {
    setLoading(true)
    ENDPOINTS[endpoint](page, search)
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { data, error, loading }
}
