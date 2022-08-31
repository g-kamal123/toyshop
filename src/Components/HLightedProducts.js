import React, { useContext } from 'react'
import { Storage } from './Storage'
import classes from './styles/HLightedProducts.module.css'

function HLightedProducts() {
    const detail = useContext(Storage)
    let arr = [
        {
            image:"https://cdn.cdnparenting.com/articles/2020/09/28145314/276808802-1024x700.webp",
            h3:'RIDING',
            h2:'TOYS'
        },
        {
            image:"https://i.pinimg.com/originals/95/37/a4/9537a4d8dab06b7d3ee676c7e1c23d34.jpg",
            h3:'ART',
            h2:'TOYS'
        },
        {
            image:"https://rukminim1.flixcart.com/image/612/612/kkfrjww0/block-construction/x/2/d/good-quality-non-toxic-100-pcs-baby-building-blocks-thick-2x6-original-imafzs9upjrkhrzf.jpeg?q=70",
            h3:'GAMES',
            h2:'&PUZZLE'
        },{
            image:"https://www.lego.com/cdn/cs/set/assets/blte2c1698160b33805/Architecture-Sidekick-Standard-story.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1",
            h3:'BUILDING',
            h2:'SETS'
        },{
            image:"https://rukminim1.flixcart.com/image/416/416/kfcv6vk0/bath-toy/g/s/q/12pcs-cute-soft-rubber-float-squeeze-sound-baby-bath-play-chuchu-original-imafvucbvmhsd3z2.jpeg?q=70",
            h3:'BABY',
            h2:'SHOP'
        },{
            image:"https://cdn.britannica.com/94/131894-004-492EA903/porcelain-doll-Czech-Republic.jpg",
            h3:'DOLLS',
            h2:'&FIGURES'
        },
    ]
  return (
    <div className={classes.hl}>
        <h1 className={classes.ourp}>Our Products</h1>
        <div className={classes.resize}>
        {arr.map((item)=>
        <div className={classes.prod} onClick={()=>detail.goto(item)}>
        <img src={item.image} alt=''/>
        <h3>{item.h3}</h3>
        <h4>{item.h2}</h4>
    </div>)}
    </div>
    </div>
  )
}

export default HLightedProducts