const car={
    model:'',
    wheels:0,
    width:0,
    lenght:0,
    engine:{
        status:false,
    },
    start:function(){
        this.engine=true;
    },
    stop:function(){
        this.engine=false;
    },

    doors:{
        1:{
            lock:false,
        },
    },
    2:{
        lock:true,
    },
    // اگر گفت کدام در آن را باز کن...اگر نگفت همه را باز کن
    lock:function(doorNumber=null){
        if (doorNumber==null){
            for(let i=1;i<=this.doors.lenght;i++){
                this.doors[i].lock=true
            }
            return;
        }
        this.doors[doorNumber].lock=true;
    },

    unlock:function(doorNumber=null){
        if (doorNumber==null){
            for(let i=1;i<=this.doors.lenght;i++){
                this.doors[i].lock=false
            }
            return;
        }
        this.doors[doorNumber].lock=false;
    },

};
car.lock(2)
