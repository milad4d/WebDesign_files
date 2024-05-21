let z = {
    document:null,
    setDocument:function(documentObject){
        this.document=documentObject;
    },

    ready:function(callback){
        this.document.addEventListener('DOMContentLoaded',callback)
    }
}