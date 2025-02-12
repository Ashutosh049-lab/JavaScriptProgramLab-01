

let sentenceBuilder={
    subject:"I",
    verb:"am",
    obj:"coding",


    buildSentence:function(){
        return this.subject && this.verb && this.obj
        ? `${this.subject} ${this.verb} ${this.obj}`:"Incomplete Sentence";

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

sentenceBuilder.updateProperty("verb","am learning")
console.log(sentenceBuilder.buildSentence());


sentenceBuilder.updateProperty("subject","the cat")
console.log(sentenceBuilder.buildSentence());