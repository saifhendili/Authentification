import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Data from "./Data.json"
import swal from 'sweetalert';

function Reservation() {
    const reserver=()=>{
        swal("Good job!", "Your Reservation has succesfully Created!", "success");
    }
  return (
    <Fragment>



    <section className='space'>
   

        {Data.hotels.map((x,i)=>
        <div key={i} class="card">
        <img class="card-img-top" src={x.img} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Hotel:</h5>
          <p class="card-text">{x.name}</p>
          <p class="card-text">{x.Description}</p>
          <p class="card-text">{x.Price}</p>
          <a onClick={()=>reserver()} class="btn btn-primary">Reserver</a>
        </div>
      </div>
       )}

</section>
<h3 class="text-center">Transport</h3>
<section className='space'>
        {Data.Transport.map((x,i)=>
        <div class="card">
        <img class="card-img-top" src={x.img} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Transport:</h5>
          <p class="card-text">{x.name}</p>
          <p class="card-text">{x.Price}</p>
          <a onClick={()=>reserver()} class="btn btn-primary">Reserver</a>
        </div>
      </div>
       )}

</section>
<h3 class="text-center">Recreation</h3>
<section className='space'>
        {Data.Recreation.map((x,i)=>
        <div class="card">
        <img class="card-img-top" src={x.img} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Recreation:</h5>
          <p class="card-text">{x.name}</p>
          <p class="card-text">{x.Price}</p>
          <a onClick={()=>reserver()} class="btn btn-primary">Reserver</a>
        </div>
      </div>
       )}

</section>
</Fragment>  )
}

export default Reservation