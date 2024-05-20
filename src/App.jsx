import React,{useState} from 'react'
import Card from "./component/Card"
import Header from './component/Header'
import NavBar from './component/NavBar'
import Footer from './component/Footer'

function App() {
  let data=[
    {
        image:"https://www.super99.in/pub/media/catalog/product/cache/325a3f20c9b5454dc14637ff0161ceb5/s/r/sr0008677_cover_image.jpg",
        title:"Rings",
        actualPrice:"$40.00",
        discount:"$80.00",
        description:"Super 99 Fancy Cartoon Finger Rings for baby Kids."
    },
    {
        image:"https://rukminim2.flixcart.com/image/850/1000/kuu4x3k0/lipstick/q/e/7/10-2-in-1-lipstick-matte-liquid-lipstick-crayon-with-liquid-original-imag7v7jydqehdtj.jpeg?q=90&crop=false",
        title:"Lipstick",
        actualPrice:"$20.00",
        discount:"$18.00",
        description:"ADJD 2 IN 1 LIPSTICK MATTE LIQUID LIPSTICK CRAYON."
    },
    {
        image:"https://inshineoriginals.in/cdn/shop/files/1IMAGE_f6ca98fd-9cb7-4af8-b159-b79743c47331.jpg?v=1684403379",
        title:"Compact Powder",
        actualPrice:"$50.00",
        discount:"$25.00",
        description:"INSHINE ORIGINAL'S Invisiwear True Match Compact Powder."
    },
    {
        image:"https://www.sassafras.in/cdn/shop/products/SHKUR00037-1.jpg?v=1666356427",
        title:"Western Kurtis",
        actualPrice:"$40.00",
        discount:"$80.00",
        description:" From daily wear kurtas to wedding kurta sets. indian kurtas available"
    },
    {
        image:"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/11ac1271ebf185f9844ef762cebf7a8b.jpg?imageView2/2/w/500/q/60/format/webp",
        title:"Ladies Heels",
        actualPrice:"$80.00",
        discount:"$60.00",
        description:"Shop Heels for Women Online in India at Regal Shoes. "
    },
    {
        image:"https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dweb9ef6c9/images/aw22/bacgabwbng00030aw22pnkpur_1.jpg?sw=502&sh=753",
        title:"Bangles",
        actualPrice:"$50.00",
        discount:"$45.00",
        description:"Buy designer Bangles Online for women & girls in India."
    },
    {
        image:"https://www.mannash.in/cdn/shop/products/MZSND292D564_M.jpg?v=1643980580",
        title:"Necklace",
        actualPrice:"$60.00",
        discount:"$50.00",
        description:"If you're all for dainty neckpieces.book now in website"
    },
    {
        image:"https://annikabella.com/cdn/shop/products/IMG_20220217_121022_pp_1024x1024.png?v=1647779012",
        title:"Bracelets",
        actualPrice:"$50.00",
        discount:"$30.00",
        description:"Gold Bracelets For Woman, Dainty Gold Bracelet, Chain Bracelet."
    },
]
  let [cart,setCart]=useState(0)
  return (
    <>
    <NavBar cart={cart}/>
    <Header/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    data.map((e,i)=>{
                    return <Card key={i} data={e} setCart={setCart}/>
                    })
                }
                </div>
            </div>
        </section>
      <Footer/>
  
    </>
  )
}

export default App