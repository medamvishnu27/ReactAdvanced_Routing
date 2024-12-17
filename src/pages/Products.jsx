import React from 'react'
import { Data } from '../data/products'
import { useLocation,useNavigate } from 'react-router-dom'
import styles from '../components/Styles.module.css'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'


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
    <>
  {/* catagory */}
<div className={styles.pr}>
<div className='d-flex justify-content-around align-items-center mx-5 ' >
         {/* category filters section start  */}
         <div className='category'>

        {/* buttons start */}
        <div className="btn-group "  role="group" aria-label="Basic example">
          <button type="button"   onClick={()=>HandleFilter("category","men's clothing")}   class="border border-0 px-5 bg-black text-light">men's clothing</button>
          <button type="button"   onClick={()=>HandleFilter("category","women's clothing")}  class="border border-0 px-5 bg-black text-light">women's clothing</button>
          <button type="button"   onClick={()=>HandleFilter("category","electronics")}  class="border border-0 px-5 bg-black text-light">electronics</button>
          <button type="button"   onClick={()=>HandleFilter("category","jewelery")}  class="border border-0 px-5 bg-black text-light ">jewelery</button>
          <button type="button"   onClick={()=>HandleFilter("category","") }  class="border border-0 px-5 bg-black text-light">AllProducts</button>
        </div>
        {/* <h3 className='fs-5 text-center  '>Filter by category</h3> */}
        {/* buttons end */}
       </div>
       {/* category filters section end */}

      </div>
  
</div>





    {/* sorting buttons start */}
    <div className={styles.sort}>
       <h3 className='fs-5 '>Filter by Price </h3>
          <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button"  onClick={()=>HandleFilter("sort","asc")} class="btn btn-success fs-4"><i class="bi bi-arrow-up"></i> Low to High</button>
              <button type="button"  onClick={()=>HandleFilter("sort","des")} class="btn btn-danger fs-4"><i class="bi bi-arrow-down"></i> High to Low</button>
            </div>
    </div>
   {/* sorting buttons end */}

   
    
       {/* Products start  */}
       <div className={styles.mr}> 

       <div className="  row  ">
        {
          filteredProducts.length>0?filteredProducts.map((ele)=>(
         
            <div className='col-sm-12 col-md-4 col-lg-4 my-5 '>
              <div className=" card shadow p-3 text-center">
                <img src={ele.image} alt="" width={"100%"} height={"350px"} />
                <h3 className='card-title py-2'>{ele.title.slice(0,20)}</h3>
                <h5 className='card-text py-2'>Rs:{ele.price}</h5>
                <p className='card-text py-2'>{ele.description.slice(0,40)}</p>
              </div>
            </div>
        
          )):"No-products Found"
        }
       </div>
       </div>
       {/* Products end */}
       <Footer/>
    </>
  )
}

export default Products