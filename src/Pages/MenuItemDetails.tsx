import React from 'react'
import { menuItemModel } from '../Interfaces';

interface Props {
    menuItem: menuItemModel
}

function MenuItemDetails() {
  return (
    <div className="container pt-4 pt-md-5">
      <div className="row">
        <div className="col-7">
            <h2 className="text-success">Name</h2>
            <span>
                <span className="badge text-bg-dark pt-2" style={{height: "40px", fontSize: "20px"}}>
                    Category
                </span>
            </span>
            <span>
                <span className="badge text-bg-light pt-2" style={{height: "40px", fontSize: "20px"}}>
                    Tag
                </span>
            </span>
            <p style={{fontSize:"20px"}} className="pt-2">
                Description
            </p>
            <span className="h3">Price</span> &nbsp;&nbsp;&nbsp;
            <span className="pb-2 p-3" style={{border: "1px solid #333", borderRadius: "30px"}}>
                <i className="bi bi-dash p-1" style={{fontSize: "25px", cursor: "pointer"}}></i>
                <span className="h3 mt-3 px-3">XX</span>
                <i className="bi bi-plus p-1" style={{fontSize: "25px", cursor: "pointer"}}></i>
            </span>
            <div className="row pt-4">
                <div className="col-5">
                    <button className="btn btn-success form-control">
                        Add to Cart
                    </button>
                </div>
                <div className="col-5">
                    <button className="btn btn-secondary form-control">
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
        <div className="col-5">
            <img
            src={props.menuItem.image}
            width="100%"
            style={{borderRadius: "50%"}}
            alt="No content"
            ></img>
        </div>
      </div>
    </div>
  )
}

export default MenuItemDetails;