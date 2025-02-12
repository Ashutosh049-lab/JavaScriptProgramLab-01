

let sentenceBuilder={
    sub:"I",
    verb:"am",
    obj:"coding",


    buildSentence:function(){
        return this.sub && this.verb && this.obj
        ? `${this.sub} ${this.verb} ${this.obj}`:"Incomplete Sentence";

    },


    updateProperty:function(property,value){

        if(this.hasOwnProperty(property)){
            this[property]=value;
        }else{
            return "Invalid Property";
        }
    }
};
console.log(sentenceBuilder.buildSentence());