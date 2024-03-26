// Immediately Invoked Function Expresssions (IIFE)

(function chai(){
    //named iife 
    console.log(`DB CONNECTED`);

})();
//chai()
(  function aurCOde() {
        console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('RAJEEV')