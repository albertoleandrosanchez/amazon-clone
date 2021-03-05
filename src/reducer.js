
export const initialState = {
    basket: [],
    user:null ,
};

export const getBasketTotal = (basket) => {
    return basket?.reduce((acummulator, item) => Number(item.price) + acummulator, 0 );
}

const reducer = (state,action) => {
    
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
                //encontramos el indice del producto
                
                const index = state.basket.findIndex(
                 (basketItem) => basketItem.id === action.id
                );    

                let newBasket = [...state.basket]
                
                if(index >= 0){
                    //corta ese producto tomando su indice a 1 mas adelante
                    newBasket.splice(index,1);
                } else{
                    console.warn(
                        `No se puede remover el producto (id: ${action.id}) ya que no se encuentra en el carrito`
                    )
                };
                return{...state,
                        basket :newBasket};
        case "SET_USER":
            
            return {...state, user:action.user};
            
    
        default:
            return state;
    }
};
export default reducer

