import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'jewelry',
    url: '/jewelry',
  },
  {
    id: 5,
    text: 'electronics',
    url: '/electronics',
  },
  {
    id: 6,
    text: 'menclothing',
    url: '/menclothing',
  },
  {
    id: 7,
    text: 'womenclothing',
    url: '/womenclothing',
  },
  {
    id: 8,
    text: 'userpage',
    url: '/userpage',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Online Shopping',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Delivery',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Return Policy',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'https://fakestoreapi.com/products'

export const single_product_url = `https://fakestoreapi.com/products/1`
