function calculateIMC(weight, height){
    if (height === 0){
        return 'NaN';   // Return NaN if height is zero 
    }
    
    const heightInMeters = height / 100;

    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function calculateIMC(weight, height){
    if (height === 0){
        return 'NaN';   // Return NaN if height is zero 
    }
    
    const heightInMeters = height / 100;

    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

module.exports = {calculateIMC} // Module responsible for exporting the function 'calculateIMC' to be tested