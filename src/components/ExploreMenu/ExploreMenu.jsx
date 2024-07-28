import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets.js'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu' >
        <h1>Explore Menu</h1>
        <p className='explore-menu-text' >As the world is advancing day by day, it is becoming easier to get access to many kinds of food at our doorstep. Every day, we all want to consume great and delicious cuisine. </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p> {item.menu_name} </p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
