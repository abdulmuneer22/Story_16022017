const intitialState = ""
export default (state = intitialState,action) => {

    switch(action.type){
       case 'IRTC_TEXT':
    //    alert(action.payload)
       return action.payload

       default:
       return state
    }


}
