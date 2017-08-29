function receivesAFunction(callback){
  callback()
}
function returnsANamedFunction(){
  return function breakfast() {console.log(`Nom nom nom, this is delicious!`);}
}
function returnsAnAnonymousFunction(){
  return function() {console.log(`blah blah blah`)}
}
