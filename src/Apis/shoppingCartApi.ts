import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const shoppingCartApi = createApi({
    reducerPath:"shoppingCartApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://redmangoapi.azurewebsites.net/api/"
    }),
    tagTypes:["ShoppingCarts"],
    endpoints: (builder) => ({
        getShoppingCart: builder.query({
            query: (userId) => ({
                url: `shoppingCart`,
                params:{
                 userId:userId
                }
            }),
            providesTags:["ShoppingCarts"]
        }),
        updateShoppingCart: builder.mutation({
         query: ({menuItemId, updateQuantityBy, userId}) =>({
          url: "shoppingCart",
          method: "POST",
          params: {
           userId: userId,
           updateQuantityBy: updateQuantityBy,
           menuItemId: menuItemId
          }
         })
        })
    })
})

export const {useGetShoppingCartQuery, useUpdateShoppingCartMutation} = shoppingCartApi;
export default shoppingCartApi;