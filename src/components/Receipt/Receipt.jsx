import React from 'react'
import './Receipt.css';

function Receipt(props) {
  let receipt =  props.receipt
  return (
    <div class="receipt-container">
      <h1>{receipt.person}</h1>
      <div class="label-container">
        <label htmlFor="main" class="label-text">Main: </label>
        <span id='main'>{receipt.order.main}</span>
      </div>
      <div class="label-container">
        <label htmlFor="main" class="label-text">Protein: </label>
        <span id='main'>{receipt.order.protein}</span>
      </div>
      <div class="label-container"> 
        <label htmlFor="main" class="label-text">Rice: </label>
        <span id='main'>{receipt.order.rice}</span>
      </div>
      <div class="label-container">
        <label htmlFor="main" class="label-text">Sauce: </label>
        <span id='main'>{receipt.order.sauce}</span>
      </div>
      <div class="label-container">
        <label htmlFor="main" class="label-text">Drink: </label>
        <span id='main'>{receipt.order.drink}</span>
      </div>
      <div class="label-container">
        <label htmlFor="main" class="label-text">Cost: </label>
        <span id='main'>{receipt.order.cost}</span>
      </div>
    </div>
  )
}

export default Receipt