let person={
    hair : {
        color : null,
        type : null
    },
    haircolor : function(value = null){
        if(value == null) {
            return this.hair.color
        }

        this.hair.color = value;
        return this;

       
    },
    hairstyle : function(value2 = null){
        if(value2 == null) {
            return this.hair.type
        }

        this.hair.type = value;
        return this;
       
    }
}

person.haircolor('red').hairstyle('nice')


console.log(person.haircolor())