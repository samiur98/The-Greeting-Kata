console.log("The Greeting Kata.");

function greet(name){
    if((typeof(name) === 'undefined')){
        return("Hello, my friend.");
    }
    if(typeof(name) === 'string'){
        return greetString(name);
    }
    if(typeof(name) === 'object'){
        return greetObject(name);
    }
}

function greetString(name){
    if(isUpperCase(name)){
        return(`HELLO, ${name}!`);
    }
    return(`Hello, ${name}.`);
}

function greetObject(name){
    if(name == null){
        return("Hello, my friend.");
    }
    var nameArray = [];
    var capArray = []
    for(names in name){
        helperArray = name[names].split(", ");
        for(i = 0; i < helperArray.length; i++){
            if(isUpperCase(helperArray[i])){
                capArray.push(helperArray[i]);
            }
            else{
                nameArray.push(helperArray[i]);
            }
        }
        if(helperArray.length == 0){
            if(isUpperCase(name[names])){
                capArray.push(name[names]);
            }
            else{
                nameArray.push(name[names]);
            }
        }
    }
    returnValue = "Hello, ";
    for(i = 0; i < nameArray.length - 2; i++){
        returnValue = returnValue + `${nameArray[i]}, `;
    }
    returnValue = returnValue + `${nameArray[nameArray.length - 2]} and ${nameArray[nameArray.length - 1]}.`;
    if(capArray.length != 0){
        returnValue = handleCaps(returnValue, capArray);
    }
    return returnValue;
}

function handleCaps(str, capArray){
    str = str + " AND HELLO "
    if(capArray.length == 1){
        str = str + `${capArray[0]}!`;
        return str;
    }
    for(i = 0; i < capArray.length - 2; i++){
        str = str + `${capArray[i]}, `;
    }
    str = str + `${capArray[capArray.length - 2]} AND ${capArray[capArray.length - 1]}!`;
    return str;
}

function isUpperCase(str){
    return str == str.toUpperCase();
}

module.exports.greet = greet;