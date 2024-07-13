

function callajax(){
    const ajax= new XMLHttpRequest()

    ajax.onload=function(){
        let response = JSON.parse(this.responseText)
        response.products.forEach(function(item){
            console.log(item.title)
        });
        console.log(response)
    }
    ajax.open('GET','api.json')
    ajax.send()
}