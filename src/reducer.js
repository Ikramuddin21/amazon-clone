export const initialState = {
    basket: [
        {
            id: "343343",
            title: "The Lean Startup: How Constant Innovation Craates Radically Successful Businesses Paperback",
            price: 12.96,
            rating: 3,
            image: "https://i.ibb.co/Kx4GF5T/51-Zymoq7-Un-L-SX325-BO1-204-203-200.jpg"
        },
        {
            id: "343343",
            title: "The Lean Startup: How Constant Innovation Craates Radically Successful Businesses Paperback",
            price: 12.96,
            rating: 3,
            image: "https://i.ibb.co/Kx4GF5T/51-Zymoq7-Un-L-SX325-BO1-204-203-200.jpg"
        },
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from basket...

            // we cloned the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            
            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                );
            }

            return { 
                ...state ,
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;