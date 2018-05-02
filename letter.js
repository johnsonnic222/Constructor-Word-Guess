function Letter(let){
    this.character = let;
    this.appear = false;

    this.displayletter = function(character){
        console.log("Inside displayletter :"+character);
      if(this.character === false ){
        return "_";
      }else {
        return character;
      }
    }
}
module.exports = Letter;