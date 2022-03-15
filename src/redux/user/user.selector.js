import { createSelector } from "reselect";
const selectUser= state=>state.user;
const selectCart= state=>state.cart;
export const SelectCartItems=createSelector(
[selectCart],
cart=>cart.cartItems
)

export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden,
)
export const selectCurrentUser=createSelector(
    [selectUser],
    (user)=>user.currentUser

)