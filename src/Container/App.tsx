import React from 'react';
import {Header, Footer} from "../Components/Layout";
import {useState, useEffect} from 'react';
import { menuItemModel } from '../Interfaces';
import {Home, MenuItemDetails, NotFound} from '../Pages';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi';
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice';


function App() {
  const dispatch = useDispatch();
  const {data, isLoading} = useGetShoppingCartQuery("7ae4f3f8-6c4c-492b-b128-16f7a271b9b6");
  
  useEffect(() =>{
    if(!isLoading){
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems))
    }
  }, [data])

  return (
    <div>
      <Header/>
        <div className="pb-5">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/menuItemDetails/:menuItemId" element={<MenuItemDetails/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
