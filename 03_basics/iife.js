// function mbs(){
//     console.log("Bilal");    
// }   
// mbs()

// iife use to avoid globle poluution
(function mbs(){
    console.log("Bilal");
})();

// (funtion definition) (execution call)
// iife is imediatelly excution and delete gloable pollution


(function cr7 (){
    //Name iife
    console.log(`Bilal`);
})();

((greet) => {
    // unname iife
    console.log(`Bilal, ${greet}`);
})("Hi, ")