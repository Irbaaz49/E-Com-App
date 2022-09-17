
import { JoinLeft } from "@mui/icons-material";

export const initialState = {
  basket: [],
  user :null
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //find the first match or index or id  of the particular item using below function and returns true;

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // copy the basket in the temporary varaible
      let newBasket = [...state.basket];

      if (index >= 0) {
        // which means it actually find the item in the basket

        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }




      

      return {
        ...state,

        // if we use filter method then it will remove all the multiple items with same id;

        // basket : state.basket.filter(item => item.id !== action.id)
        basket: newBasket,
      };

      case  'REMOVE_ALL' :
        return{
            basket:[]
        }

      case 'SET_USER' :
      return {
        ...state,
        user: action.user

      }




    default:
      return state;
  }
};

export default reducer;
