import React from 'react'
import { Data } from '../data/products'
import { useLocation,useNavigate } from 'react-router-dom'

const Products = () => {
  const location=useLocation()
  const navigate=useNavigate()

  const queryparams=new URLSearchParams(location.search) // these helps in distructuring the query params 
  console.log(queryparams)

  // extract the prameters 
  const category=queryparams.get("category")
  const sort=queryparams.get("sort")

  // filtering the Products 
  const filteredProducts=Data.filter((product)=>category?product.category===category:true)
  console.log(filteredProducts)

// sorting the Products 
if(sort==="asc"){
  filteredProducts.sort((a,b)=>a.price-b.price)
}else if(sort==="des"){
  filteredProducts.sort((a,b)=>b.price-a.price)
}


function HandleFilter(key ,value){
  if(value){
     queryparams.set(key,value)
  }else{
    queryparams.delete(key)
  }
  navigate(`?${queryparams.toString()}`)
}

  return (
    <div className='container py-3'>
      <div className='d-flex justify-content-around align-items-center mx-5'>
         {/* category filters section start  */}
         <div className='category'>
       <h3 className='fs-5 text-center  '>Filter by category</h3>
        {/* buttons start */}
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button"   onClick={()=>HandleFilter("category","men's clothing")}   class="btn btn-primary">men's clothing</button>
          <button type="button"   onClick={()=>HandleFilter("category","women's clothing")}  class="btn btn-warning">women's clothing</button>
          <button type="button"   onClick={()=>HandleFilter("category","electronics")}  class="btn btn-danger">electronics</button>
          <button type="button"   onClick={()=>HandleFilter("category","jewelery")}  class="btn btn-info">jewelery</button>
          <button type="button"   onClick={()=>HandleFilter("category","")}  class="btn btn-success">AllProducts</button>
        </div>
        {/* buttons end */}
       </div>
       {/* category filters section end */}









       {/* sorting buttons start */}
       <div className='sort-products py-3'>
       <h3 className='fs-5 text-center'>Filter by Price </h3>
          <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button"  onClick={()=>HandleFilter("sort","asc")} class="btn btn-success">Low to High</button>
              <button type="button"  onClick={()=>HandleFilter("sort","des")} class="btn btn-danger">High to Low</button>
            </div>
       </div>
       {/* sorting buttons end */}
</div>

       {/* Products start  */}

       <div className="row gy-3 my-3">
        {
          filteredProducts.length>0?filteredProducts.map((ele)=>(
         
            <div className='col-sm-12 col-md-4 col-lg-4'>
              <div className="card shadow p-3 text-center">
                <img src={ele.image} alt="" width={"100%"} height={"150px"} />
                <h3 className='card-title py-2'>{ele.title}</h3>
                <h5 className='card-text py-2'>Rs:{ele.price}</h5>
                <p className='card-text py-2'>{ele.description.slice(0,40)}</p>
              </div>
            </div>
        
          )):"No-products Found"
        }
       </div>
       {/* Products end */}
    </div>
  )
}

export default Products