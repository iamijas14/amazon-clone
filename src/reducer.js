export const initialState = {
    basket: [],
    user:null
};

export const totalPrice = (basket) => (
    basket?.reduce((accumulatore, currentvalue) => accumulatore + currentvalue.price, 0 )
)

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET": 
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_FROM_BASKET": 
        //if we have more products with same ID then it will remove the first product among that ID using splice
            const index = state.basket.findIndex((basketItem) =>
                basketItem.id === action.id
            );

            let newBasket = [...state.basket]

            if(index >= 0){
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant remove product. ID: ${action.id} is not in basket`)
            }

            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        
        case "EMPTY_BASKET": 
            return {
                ...state,
                basket: []
            }

        default: 
            return state;
    }
}

export default reducer;