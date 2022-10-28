let menu=document.querySelector('.hamBurger')
let menuOp=document.querySelector('.menuoption')
let time

menu.addEventListener('mouseenter',()=>{
    menuOp.style.height="10vw"
    menuOp.style.padding="15px"
})

menu.addEventListener('mouseleave',()=>{
    time=setTimeout(()=>{
            menuOp.style=""
    },500)
})

menuOp.addEventListener('mouseenter',()=>{
    clearTimeout(time)
})

menuOp.addEventListener('mouseleave',()=>{
    menuOp.style=""
})

let allMenu=document.querySelectorAll('.allMenu')
let menuItems=document.querySelectorAll('.moremenu')
let menuTime=[]

for(let i=0;i<allMenu.length;i++){
    allMenu[i].addEventListener('mouseenter',()=>{
        menuItems[i].style.height="fit-content"
        menuItems[i].style.opacity="1"
        menuItems[i].style.transform="translate(0%,0%)"
    })

    allMenu[i].addEventListener('mouseleave',()=>{
        menuTime[i]=setTimeout(()=>{
            menuItems[i].style=""
        },200)
    })

    menuItems[i].addEventListener('mouseenter',()=>{
        clearTimeout(menuTime[i])
    })
    menuItems[i].addEventListener('mouseleave',()=>{
        menuItems[i].style=""
    })
}


let slide=document.querySelector('.imageSlide')
let move=document.querySelectorAll('#btn')
let trend=document.querySelectorAll('.car')
let imgtray=document.querySelectorAll('.swp')

slide.addEventListener('mouseenter',()=>{
    move[0].style.opacity="0.6"
    move[1].style.opacity="0.6"
})

slide.addEventListener('mouseleave',()=>{
    move[0].style.opacity="0"
    move[1].style.opacity="0"
})

for(let i=0;i<trend.length;i++){

    trend[i].addEventListener('mouseenter',()=>{
        trend[i].style.zIndex="5";
        imgtray[i+i].style.opacity="0.8"
        imgtray[i+i+1].style.opacity="0.8"
    })
}

for(let i=0;i<trend.length;i++){
    trend[i].addEventListener('mouseleave',()=>{
        trend[i].style.zIndex="1";
        imgtray[i+i].style.opacity="0"
        imgtray[i+i+1].style.opacity="0"
    })
}

let image=document.querySelectorAll('.imageSec')
let selected= parseInt((0+image.length)/2)
console.log(selected)
let selPrev=selected-1
let selNext=selected+1

function left(){
    if(selNext<image.length){

        image[selected].style.transform="translate(-103%,0%)"
        image[selNext].style.transform="translate(0%,0%)"
        selPrev=selected
        selected=selNext
        selNext=selected+1
    }
}

function right(){
    if(selPrev>=0){

        image[selected].style.transform="translate(103%,0%)"
        image[selPrev].style.transform="translate(0%,0%)"
        selNext=selected
        selected=selPrev
        selPrev=selected-1
    }
}

let imgTray=document.querySelectorAll('.imgTray')
let trans=[]
for(let i=0;i<imgTray.length;i++){
    trans[i]=0
}
let allImages=21
let movePercent=(7/allImages)*100

function swipeLeft(i){
    if(trans[i]+movePercent<99){
        imgTray[i].style.transform=`translate(-${trans[i]+movePercent}%,0%)`
        trans[i]+=movePercent
    }
}
function swipeRight(i){
    if(trans[i]!=0){
        imgTray[i].style.transform=`translate(-${trans[i]-movePercent}%,0%)`
        trans[i]-=movePercent
    }
}

// s=1,p=0,n=2> n=1,s=0,p=0<p=0s=1


let sld=document.querySelector('.imageSlide')
var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



function myFunction(x) {
    if (x.matches) { // If media query matches
      menu.addEventListener('click',menuopen)
      sld.scrollLeft=sld.clientWidth*(383.20001220703125/414)
    } else {
        menu.removeEventListener('click',menuopen)
    }
  }

let open1=document.querySelector('.menus')
let open2=document.querySelector('.actions')
let openchk=0

function menuopen(){
    if(openchk==0){
        open1.style.transform="translate(0%,0%)"
        open2.style.transform="translate(0%,0%)"
        menu.src="images/cross-23.svg"
        openchk++
    }else{
        open1.style.transform=""
        open2.style.transform=""
        menu.src="images/hamburger-menu.svg"
        openchk--
    }
}

document.querySelector('.logoMain').addEventListener('click',alt)
document.querySelector('.subs').addEventListener('click',alt)
document.querySelector('.logIn').addEventListener('click',alt)
document.querySelector('.disney').addEventListener('click',alt)
document.querySelector('.searchIcon').addEventListener('click',alt)
document.querySelector('.menus').addEventListener('click',alt)
let imgsc=document.querySelectorAll('.imageSec')
imgsc.forEach(x => {
    x.addEventListener('click',alt)
});
let watch=document.querySelectorAll('.img')
watch.forEach(x => {
    x.addEventListener('click',alt)
});

function alt(){
    window.alert('This is just a clone for educational purposes. To watch,login or subscribe visit the original site.')
}


sld.addEventListener('scroll',()=>{
    console.log(document.querySelector('.imageSlide').scrollLeft)
})
console.log(document.querySelector('.imageSlide').scrollTop)
