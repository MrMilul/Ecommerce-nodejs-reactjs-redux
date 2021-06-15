import React from 'react'

const Raiting = (props)=> {
    const {raiting, numReview} = props
    return (
        <div>
           <i style ={{color: "yellow"}}className= { raiting >= 1 ? "fas fa-star": raiting>=0.5 ? "fas fa-star-half"  : "far fa-star"} ></i>
           <i style ={{color: "yellow"}} className= { raiting >= 2 ? "fas fa-star": raiting>=1.5 ? "fas fa-star-half"  : "far fa-star"} ></i>
           <i style ={{color: "yellow"}} className= { raiting >= 3 ? "fas fa-star": raiting>=2.5 ? "fas fa-star-half"  : "far fa-star"} ></i>
           <i style ={{color: "yellow"}} className= { raiting >= 4 ? "fas fa-star": raiting>=3.5 ? "fas fa-star-half"  : "far fa-star"} ></i>
           <i style ={{color: "yellow"}} className= { raiting >= 5 ? "fas fa-star": raiting>=4.5 ? "fas fa-star-half"  : "far fa-star"} ></i>

           
            {/* <i className="fas fa-star" ></i>
            <i className="far fa-star"></i>
            <i className="fas fa-star-half"></i> */}
        </div>
    )
}


export default Raiting