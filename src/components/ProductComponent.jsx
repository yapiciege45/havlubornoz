import React from 'react'
import {Noto_Sans} from 'next/font/google'

const noto = Noto_Sans({
    subsets: ['latin'],
    weight: '400'
})

const notoBold = Noto_Sans({
    subsets: ['latin'],
    weight: '700',
    fontSize: '36px'
})

export default function ProductComponent({product, colors, designs, qualities, saves, changeCurrent, current}) {
  return (
    <div className='w-10/12 mx-auto flex mt-40'>
        <div className='w-1/2 flex justify-center'>
            {current && <img className='w-1/2 h-80' src={current.img} alt="" />}
            {!current && <img className='w-1/2 h-80' src={product.defaultImg} alt="" />}
        </div>
        <div className='flex flex-col overflow-y-scroll scrollbar-hide'>
            <h1 className={`${notoBold.className} text-4xl font-bold mt-2 mb-3`}>{product.name}</h1>
            <p className={`${noto.className} text-xl`}>{product.description}</p>
            <p className={`${noto.className} mt-5 text-xl`}>{`${product.price} TL`}</p>
            <p className={`${notoBold.className} w-full mt-5 text-xl font-bold border-b-2 border-black`}>Kaydettiklerim</p> 
            <div className='w-full flex mt-5 flex-wrap'>
                {
                    saves.map((save, i) => (
                        <div key={i} className='w-16 h-16 relative cursor-pointer mr-5' onClick={() => changeCurrent(save)}>
                            <img className='absolute top-0 w-full h-full' src={save.img} alt="" />
                        </div>
                    ))
                }
                {saves.length == 0 && <div className='w-full p-3 bg-red-400 text-white font-bold rounded-xl'>Kaydedilmiş bir ürün yok</div>}
            </div>
            <p className={`${notoBold.className} w-full mt-5 text-xl font-bold border-b-2 border-black`}>Özellikler</p>
            <div className='flex flex-col mt-3'>
                {current && (
                    <div className='flex items-center justify-between'>
                        <p className={`${notoBold.className} w-full mt-2 text-xl font-bold`}>Renk:</p>
                        <div className={`w-4 h-4 rounded-full border-2 border-black`} style={{backgroundColor: current.color.hex}}></div>
                    </div>
                )}
                {!current && (
                    <div className='flex items-center justify-between'>
                        <p className={`${notoBold.className} w-full mt-2 text-xl font-bold`}>Renk:</p>
                        <div className={`w-4 h-4 rounded-full border-2 border-black`} style={{backgroundColor: product.defaultColor}}></div>
                    </div>
                )}
                {current && (
                    <div className='flex items-center justify-between'>
                        <p className={`${notoBold.className} w-full mt-2 text-xl font-bold`}>Kumaş:</p>
                        <div className='font-bold'>{current.quality}</div>
                    </div>
                )}
                {!current && (
                    <div className='flex items-center justify-between'>
                        <p className={`${notoBold.className} w-full mt-2 text-xl font-bold`}>Kumaş:</p>
                        <div className='font-bold'>{product.defaultQuality}</div>
                    </div>
                )}
                {current && (
                    <div className='flex items-center justify-between'>
                        <p className={`${notoBold.className} w-full mt-2 text-xl font-bold`}>Tasarım:</p>
                        <div className='font-bold'>{current.design}</div>
                    </div>
                )}
                {!current && (
                    <div className='flex items-center justify-between'>
                        <p className={`${notoBold.className} w-full mt-2 text-xl font-bold`}>Renk:</p>
                        <div className='font-bold'>{product.defaultDesign}</div>
                    </div>
                )}
            </div>
            <a href={`/edit/${product.id}`} className={`${notoBold.className} font-bold text-xl w-full p-3 flex justify-center rounded-xl mt-5 items-center text-black hover:text-white hover:bg-black transition-all border-2 border-black`}>Kişiselleştir</a>
        </div>
    </div>
  )
}
