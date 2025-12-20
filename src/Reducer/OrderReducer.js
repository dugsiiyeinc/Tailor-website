export const initialState = {
   step:1,
   quantity:1,
   showPayment: false,

  // jacket measurement 
  chest: "",
  shoulder_width: "",
  neck: "",
  jacket_length: "",
  sleeve_length: "",
  sleeve_width: "",

  // pant measurement   
  wrist: "",
  rise: "",
  thigh: "",
  knee: "",
  ankle: "",
  pant_length: "",
};

export const OrderReducer=(state, action)=>{

    switch(action.type){
        case 'next-step':
            return {...state, step: state.step + 1};
        case 'prev-step':
            return {...state, step: state.step - 1};
        case "increase_qty":
            return { ...state, quantity: state.quantity + 1 };
        case "decrease_qty":
            return {...state,quantity: Math.max(1, state.quantity - 1)};
        case "show-payment":
            return { ...state, showPayment: true };
        case 'update_field':
            return {...state, [action.field]:action.value};
        default:
            return state
    }
}
