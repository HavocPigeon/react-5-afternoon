const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
    }
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';

function reducer(state = initialState, action){
if (action.type === UPDATE_LOAN_TYPE){
    return {...state, loantype: action.payload}
} else if (action.type === UPDATE_PROPERTY_TYPE){
    return {...state, propertyType: action.payload}
} else if (action.type === UPDATE_CITY){
    return {...state, city: action.payload}
} else if (action.type === UPDATE_PROP){
    return {...state, propToBeUsedOn: action.payload}
} return state;
}

export function updateLoanType(loantype){
    return{
    type: UPDATE_LOAN_TYPE,
    payload: loantype,
    }
}
export function updatePropertyType(propertytype){
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: propertytype,
    }
}
export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city,
    }
}
export function updateProp(prop){
    return {
        type: UPDATE_PROP,
        payload: prop,
    }
}
export default reducer;