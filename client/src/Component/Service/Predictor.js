import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Data from "./Data.json"
import swal from 'sweetalert';

function Predictor() {
    const winner=(result)=>{
        swal("The winner is!", result);
    }
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
              <a value={x.Gan} onClick={() =>winner(x.Gan)} class="btn btn-primary">Reserver</a>
            </div>
          </div>
           )}
  
</section>
    </Fragment>
  )
}

export default Predictor