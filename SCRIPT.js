/*let alllis = document.querySelectorAll("ul li");

alllis.forEach(function(elments){
elments.onclick=function(){
alllis.forEach(function(elments){
elments.classList.remove("active")
    })
this.classList.add("active")    }
})*/

let lis = document.querySelectorAll(".color li")


lis.forEach(function(ele){
    ele.onclick = function(){
        lis.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})




let lis2 = document.querySelectorAll(".color2 li")


lis2.forEach(function(ele){
    ele.onclick = function(){
        lis2.forEach(function(ele){
            ele.classList.remove("active2")
        })
        this.classList.add("active2")
    }
})


let lis3 = document.querySelectorAll(".color3 li")


lis3.forEach(function(ele){
    ele.onclick = function(){
        lis3.forEach(function(ele){
            ele.classList.remove("active3")
        })
        this.classList.add("active3")
    }
})
















/*let img= document.querySelectorAll("ul li")


lis.forEach(function(ele){
    ele.onclick = function(){
        lis.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})*/