import React from 'react'
import classes from './Header.module.css'
import headerbcg from '../../assets/meals (1).jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = ({onShowModal}) => {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowModal={onShowModal}/>
    </header>

    <div className={classes['main-image']}>
        <img src={headerbcg} alt='alot of foods'/>
    </div>
    </>
  )
}

export default Header
