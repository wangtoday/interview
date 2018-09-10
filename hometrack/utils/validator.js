/*** @copyright Wang Zhou 2018. All Rights Reserved.*/

module.exports.jsonFormat = (query, body) => {
    // we only do a basic format to ensure the post have everything we need
    try{
        body = JSON.parse(body);
        
       
        return dataformatCheck(body);
    } catch(e){
        return false;
    }
    
};

module.exports.formatAddress = (address)=>{
    return `${address.buildingNumber} ${address.street} ${address.suburb} ${address.state} ${address.postcode}`;
}


function dataformatCheck(body){
    if(body.payload && Array.isArray(body.payload )){
        const payload = body.payload ;
        let check = true;
        payload.forEach(item=>{
            // object format check
            // note: I am not suer if the buildingNumber or other propertity should be a must in this exercise, 
            // asume it is a must have
            if(item.address&&item.address.buildingNumber&&item.address.postcode&&item.address.state&&item.address.street&&item.address.suburb&&item.type&&item.workflow){
                
            }else{
                check = false;
                return;
            }
        })
        
        return check;
    }else{
        return false;
    }
}