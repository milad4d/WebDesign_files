const Wheels={
    radius:18,
    ring:'oz',
    width:15,
};
const Engine={
    turbe:true,
    power:2000,
};
const Doors={
    num:2,
}
const car={
    doors:2,
    wheels:{
        __prto__:Wheels,
    },
    engine:{
        __prto__:Engine,
    },
    doors:{
        __prto__:Doors,
    }
};


let BMW=Object.create(car);
console.log(BMW)