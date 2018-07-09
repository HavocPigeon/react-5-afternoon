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
const UPDATE_FOUND = 'UPDATE_FOUND';

function reducer(state = initialState, action){
if (action.type === UPDATE_LOAN_TYPE){
    return {...state, loantype: action.payload}
} else if (action.type === UPDATE_PROPERTY_TYPE){
    return {...state, propertyType: action.payload}
} else if (action.type === UPDATE_CITY){
    return {...state, city: action.payload}
} else if (action.type === UPDATE_PROP){
    return {...state, propToBeUsedOn: action.payload}
} else if(action.type === UPDATE_FOUND){
    return {...state, found: action.payload}
} else if(action.type === 'UPDATE_REALESTATEAGENT'){
    return {...state, agent: action.payload}
} else if(action.type === 'UPDATE_COST'){
    return {...state, cost: action.payload}
} else if (action.type === 'UPDATE_DOWNPAYMENT'){
    return {...state, downPayment: action.payload}
} else if (action.type === 'UPDATE_CREDIT'){
    return {...state, credit: action.payload}
} else if (action.type === 'UPDATE_HISTORY'){
    return {...state, history: action.payload}
} else if (action.type === 'UPDATE_ADDRESSONE'){
    return {...state, addressOne: action.payload}
} else if (action.type === 'UPDATE_ADDRESSTWO'){
    return {...state, addressOne: action.payload}
} else if (action.type === 'UPDATE_ADDRESSTHREE'){
    return {...state, addressOne: action.payload}
} else if (action.type === 'UPDATE_FIRSTNAME'){
    return {...state, firstName: action.payload}
} else if (action.type === 'UPDATE_LASTNAME'){
    return {...state, lastName: action.payload}
} else if (action.type === 'UPDATE_EMAIL'){
    return {...state, email: action.payload}
}return state;
}
export function updateEmail(email){
    return {
        type: 'UPDATE_EMAIL',
        payload: email,
    }
}
export function updateFirstName(firstName){
    return {
        type: 'UPDATE_FIRSTNAME',
        payload: firstName,
    }
}
export function updateLastName(lastName){
    return {
        type: 'UPDATE_LASTNAME',
        payload: lastName,
    }
}
export function updateAddressOne (addressOne){
    return {
        type: 'UPDATE_ADDRESSONE',
        payload: addressOne,
    }
}
export function updateAddressTwo (addressTwo){
    return {
        type: 'UPDATE_ADDRESSTWO',
        payload: addressTwo,
    }
}
export function updateAddressThree (addressThree){
    return {
        type: 'UPDATE_ADDRESSTHREE',
        payload: addressThree,
    }
}
export function updateHistory (history){
    return {
        type: 'UPDATE_HISTORY',
        payload: history,
    }
}
export function updateCredit(credit){
    return {
        type: 'UPDATE_CREDIT',
        payload: credit,
    }
}
export function updateDownPayment(payment){
    return {
        type: 'UDPATE_DOWNPAYMENT',
        payload: payment,
    }
}
export function updateCost(cost){
    return {
        type: 'UPDATE_COST',
        payload: cost,
    }
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
export function updateFound(found){
    return {
        type: UPDATE_FOUND,
        payload: found,
    }
}
export function updateRealEstateAgent(agent){
    return {
        type: 'UPDATE_AGENT',
        payload: agent,
    }
}
export default reducer;