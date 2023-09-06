function receivesAFunction(spy){
   console.log('return callback function spy()')
   spy();
}

function returnsANamedFunction(){
    return receivesAFunction
}


function returnsAnAnonymousFunction(){
 return function(){
    console.log('return anonymous function')
 }}