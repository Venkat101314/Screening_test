import React from 'react'
import "../styles.css";
import Header from './header/Header';

const SelectedGrozo = () => {
  return (
    <div className='panel'>
    <div className='header'>
      <Header />
    </div>
    <div className='dashboard'>SelectedGrozo</div>
  </div>
  )
}

export default SelectedGrozo