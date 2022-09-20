import axios from 'axios'

const URL = 'https://ig-food-menus.herokuapp.com'

export const GetFood = async (page, search) => {
  const { data } = await axios.get(`${URL}/our-foods`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetFoodById = async (id, food) => {
  const { data } = await axios.get(`${URL}/${food}`, {
    params: { id: id }
  })
  return data
}

export const GetBurger = async (page, search) => {
  console.log(page)
  const { data } = await axios.get(`${URL}/burgers`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetBread = async (page, search) => {
  const { data } = await axios.get(`${URL}/breads`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetSandwich = async (page, search) => {
  const { data } = await axios.get(`${URL}/sandwiches`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetDrink = async (page, search) => {
  const { data } = await axios.get(`${URL}/drinks`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetPizza = async (page, search) => {
  const { data } = await axios.get(`${URL}/pizzas`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetBestFood = async (page, search) => {
  const { data } = await axios.get(`${URL}/best-foods`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetBbqs = async (page, search) => {
  const { data } = await axios.get(`${URL}/bbqs`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetChocolate = async (page, search) => {
  const { data } = await axios.get(`${URL}/chocolates`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetDessert = async (page, search) => {
  const { data } = await axios.get(`${URL}/desserts`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetFriedChicken = async (page, search) => {
  const { data } = await axios.get(`${URL}/fried-chicken`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetIceCream = async (page, search) => {
  const { data } = await axios.get(`${URL}/ice-cream`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetPork = async (page, search) => {
  const { data } = await axios.get(`${URL}/porks`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetSausage = async (page, search) => {
  const { data } = await axios.get(`${URL}/sausages`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}

export const GetStake = async (page, search) => {
  const { data } = await axios.get(`${URL}/steaks`, {
    params: { _limit: 12, _page: page, name_like: search }
  })
  return data
}
