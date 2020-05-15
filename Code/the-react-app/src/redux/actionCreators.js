import Axios from "axios"

export const createINCAction = () => {
    return {
        type: "INC_CTR"
    }
}

export const createDECRAction = () => {
    return {
        type: "DECR_CTR"
    }
}

export const createFCAction = () => {

    //{type: "FETCH_CUSTOMERS", payload: [.....]}

    return async (dispatch) => {

        //Async call
        const resp = await Axios.get("https://calm-beach-18228.herokuapp.com/customers");
        dispatch({
            type: "FETCH_CUSTOMERS",
            payload: resp.data

        });
    }
}

//component ==> disptach an action(Object) ==> Thunk(middleware) ==> ignore ==> reducer ==> updates store

//component ==> disptach an action(function) ==> Thunk(middleware) 
                                //==> invove that function ==> dispatch an action(object) ==> reducer ==> update store