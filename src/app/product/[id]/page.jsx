import ProductContainer from '@/containers/ProductContainer'
import React from 'react'

export default function Product({params}) {
  return (
    <ProductContainer id={params.id} />
  )
}
