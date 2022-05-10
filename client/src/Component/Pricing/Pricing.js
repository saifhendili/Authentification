import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
 
    <div id="pricing" class="pricing-tables">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-heading">
            <h4>We Have The Best Pre-Order <em>Prices</em> You Can Get</h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing-item-regular">
            <span class="price">$12</span>
            <h4>Standard Plan App</h4>
            <div class="icon">
              <img src="assets/images/pricing-table-01.png" alt=""/>
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>20 TB of Storage</li>
              <li class="non-function">Life-time Support</li>
              <li class="non-function">Premium Add-Ons</li>
              <li class="non-function">Fastest Network</li>
              <li class="non-function">More Options</li>
            </ul>
            <div class="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing-item-pro">
            <span class="price">$25</span>
            <h4>Business Plan App</h4>
            <div class="icon">
              <img src="assets/images/pricing-table-01.png" alt=""/>
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>50 TB of Storage</li>
              <li>Life-time Support</li>
              <li>Premium Add-Ons</li>
              <li class="non-function">Fastest Network</li>
              <li class="non-function">More Options</li>
            </ul>
            <div class="border-button">
            <Link to="/payment">       <a href="#">Purchase This Plan Now</a></Link>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing-item-regular">
            <span class="price">$66</span>
            <h4>Premium Plan App</h4>
            <div class="icon">
              <img src="assets/images/pricing-table-01.png" alt=""/>
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>120 TB of Storage</li>
              <li>Life-time Support</li>
              <li>Premium Add-Ons</li>
              <li>Fastest Network</li>
              <li>More Options</li>
            </ul>
            <div class="border-button">
            <Link to="/PlaceOrderPremuim"> <a href="#">Purchase This Plan Now</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 

  )
}

export default Pricing