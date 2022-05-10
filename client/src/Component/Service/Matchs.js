import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Data from "./Data.json"
function Matchs() {
  return (
    <Fragment>
        <section className='space'>
            {Data.Match.map((x,i)=>
            <div class="card">
            <img class="card-img-top" src="https://pbs.twimg.com/media/FPKGFUZX0AQqdfM?format=jpg&name=4096x4096" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Match:</h5>
              <p class="card-text">{x.Equipe1}</p>
              <p class="card-text">Vs</p>
              <p class="card-text">{x.equipe2}</p>
              <Link to ="/Reservation"class="btn btn-primary">Reserver</Link>
            </div>
          </div>
           )}
  
</section>
    </Fragment>
  )
}

export default Matchs