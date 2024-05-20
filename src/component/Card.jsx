import React,{useState} from 'react'

function Card({setCart,data}) {
    let[toggle,setToggle]=useState(true);
    
  return (
    <>
        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={data.image} alt="..." style={{height: "300px"}}/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{data.title}</h5>
                                    <span className="text-muted text-decoration-line-through">{data.actualPrice}</span>
                                    {data. discount}
                                </div>
                                <p>{data.description}</p>
                            </div>
                                    <div className="card h-100">
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                {
                                            toggle?<button className="btn btn-outline-dark mt-auto" 
                                                        onClick={()=>{
                                                            setToggle(current=>!current)
                                                            setCart(current=>current+1)
                                                        }}>Add To Cart</button>
                                                    :
                                                    <button className="btn btn-dark mt-auto" 
                                                        onClick={()=>{
                                                            setToggle(current=>!current)
                                                            setCart(current=>current-1)
                                                    }} >Remove</button> 
                                                }
                                            </div>          
                                         </div>
                                    </div>
                                </div>
                            </div>
    </>
  )
}

export default Card