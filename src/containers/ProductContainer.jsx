"use client"
import ProductComponent from '@/components/ProductComponent'
import React, { useEffect, useState } from 'react'

import Products from '../mocks/products.json'
import Designs from '../mocks/designs.json'
import Colors from '../mocks/colors.json'
import Qualities from '../mocks/qualities.json'

export default function ProductContainer({id}) {
  const product = Products.find(p => p.id == id)
  const [saves, setSaves] = useState([])
  const [current, setCurrent] = useState(null)
  
  const changeCurrent = (curr) => {
    setCurrent(curr)
  }

  let designs = []
  for (let i = 0; i < product.designs.length; i++) {
    const element = Designs.find(d => d.id == product.designs[i]);
    designs.push(element)
  }

  let colors = []
  for (let i = 0; i < product.colors.length; i++) {
    const element = Colors.find(c => c.id == product.colors[i]);
    colors.push(element)
  }

  let qualities = []
  for (let i = 0; i < product.qualities.length; i++) {
    const element = Qualities.find(q => q.id == product.qualities[i]);
    qualities.push(element)
  }

  useEffect(() => {
    localStorage.setItem('saves', JSON.stringify([
    {
      product: 2,
      color: 2,
      quality: 2,
      design: 2,
    },
    {
      product: 2,
      color: 3,
      quality: 5,
      design: 1,
    },
    {
      product: 3,
      color: 3,
      quality: 4,
      design: 1,
    },
    {
      product: 2,
      color: 4,
      quality: 4,
      design: 4,
    }
    ]))
    const localSaves = JSON.parse(localStorage.getItem('saves'))
    if(localSaves) {
      for (let i = 0; i < localSaves.length; i++) {
        const element = localSaves[i];
        if(element.product == product.id) {

          const localImg = product.colors.find(c => c.id == element.color)
          const localColor = Colors.find(c => c.id == element.color)
          
          const localDesign = Designs.find(d => d.id == element.design)

          const localQuality = Qualities.find(q => q.id == element.quality)

          const save = {
            id: product.id,
            name: product.name,
            img: localImg.img,
            color: {
              name: localColor.name,
              hex: localColor.hex
            },
            design: localDesign.name,
            quality: localQuality.name
          }

          setSaves(prev => [...prev, save])
        }
      }
    }
  }, [])

  return (
    <ProductComponent 
        product={product}
        designs={designs}
        colors={colors}
        qualities={qualities}
        saves={saves}
        changeCurrent={changeCurrent}
        current={current}
    />
  )
}
