export const addInStateObj = (setStateFn,keyName,keyValue) =>{
    setStateFn(pre=>{
        const temp = {...pre}
        temp[keyName] = keyValue;
        return temp;
    })
}

