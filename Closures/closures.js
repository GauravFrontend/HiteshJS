// access to outer scope in a function from inner function ( lexical scoping )
function init (){
    let name = "Mozieal";
    function displayName (){
        let tydd = "chl rha h "
        console.log(name)
        function secret() {
            console.log(tydd)
        }
        secret()
    }
    displayName();
}
init();


// closure main - full lexical scope gets tranfered with return function 

function outer (){
    const name = "Closure"
    function inner (){
        console.log(name)
    }
    return inner
}
