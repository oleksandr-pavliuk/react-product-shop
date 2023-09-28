import React from 'react'
import { menuItemModel } from '../../../Interfaces';
import {Link} from 'react-router-dom';
import { useUpdateShoppingCartMutation } from '../../../Apis/shoppingCartApi';
import { useState } from 'react';
import { MiniLoader } from '../Common';

interface Props {
    menuItem: menuItemModel;
}

function MenuItemCard(props : Props) {
    const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
    const [updateShoppingCart] = useUpdateShoppingCartMutation();
  
    const handleAddToCart = async (menuItemId : number) => {
        setIsAddingToCart(true);
        const response = await updateShoppingCart({menuItemId: menuItemId, userId:'7ae4f3f8-6c4c-492b-b128-16f7a271b9b6', updateQuantityBy: 1});
        console.log(response)
        setIsAddingToCart(false);
    }


    return (
    <div className="col-md-4 col-12 p-4">
        <div className="card" style={{boxShadow:"0 1px 7px 0 rgb(0 0 0 / 50%)"}}>
            <div className="card-body pt-2">
                <Link to={`/menuItemDetails/${props.menuItem.id}`}>
                    <img 
                    src={props.menuItem.image}
                    style={{borderRadius:"50%"}}
                    alt=""
                    className="w-100 mt-5 image-box"/>
                </Link>
                
            </div>
            {props.menuItem.specialTag && props.menuItem.specialTag.length > 0 &&(
                <i className="bi bi-star btn btn-success"
            style={{
                position:"absolute",
                top:"15px",
                left:"15px",
                padding:"5px 10px",
                borderRadius:"3px",
                outline:"none !important",
                cursor:"pointer"
            }}>
            &nbsp; {props.menuItem.specialTag}
            </i>
            )}

            {isAddingToCart ? (
                <div style={{position: "absolute",
                top: "15px",
                right: "15px"}}>
                    <MiniLoader/>
                </div>
            ) : (
            <i onClick = {() => {handleAddToCart(props.menuItem.id)}} 
            className="bi bi-cart-plus btn btn-outline-danger"
            style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                padding: "5px 10px",
                borderRadius:"3px",
                outline:"none !important",
                cursor:"pointer"
            }}>
            </i>)
            }
            
            <div className="text-center">
                <Link to={`/menuItemDetails/${props.menuItem.id}`}
                style={{textDecoration: "none", color:"green"}}>
                    <p className="card-title m-0 text-success fs-3">{props.menuItem.name}</p>
                </Link>
                <p className="badge bg-secondary" style={{textAlign: "center"}}>
                    {props.menuItem.category}
                </p>
            </div>
            <p className="card-text" style={{textAlign: "center"}}>
               {props.menuItem.description}
            </p>
            <div className="row text-center">
                <h4>{props.menuItem.price}</h4>
            </div>
        </div>
    </div>
  )
}

export default MenuItemCard
