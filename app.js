var button5 =document.querySelector('.button5')
var button1 =document.querySelector('.button1')
var button2 =document.querySelector('.button2')
var button3 =document.querySelector('.button3')
var button4 =document.querySelector('.button4')
var button6 =document.querySelector('.button6')
var hotmilInbox =document.querySelector('.hotmilInbox')
var protonInbox =document.querySelector('.protonInbox')
var laposteInbox =document.querySelector('.laposteInbox')
var setInbox =document.querySelector('.setInbox')
var button7 =document.querySelector('.button7')

button7.addEventListener('click', () =>{
    button1.innerHTML = ""
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    button5.innerHTML = ""
    hotmilInbox.value = ""
    protonInbox.value = ""
    setInbox.value    = ""
    laposteInbox.value = ""
    
})

hotmilInbox.addEventListener('input',() => {
    button1.innerHTML = hotmilInbox.value*14
    myfun()

    
    

})
protonInbox.addEventListener('input',() => {
    console.log(protonInbox.value)
    button2.innerHTML = protonInbox.value*7

    myfun()


})
laposteInbox.addEventListener('input',() => {
    button3.innerHTML = laposteInbox.value*25
    myfun()

})
setInbox.addEventListener('input',() => {
    button4.innerHTML = setInbox.value*49
    myfun()

})

button6.addEventListener('click', ()=>{
    button5.innerHTML=Number( button1.innerHTML)+ Number( button2.innerHTML) +Number( button3.innerHTML) +Number( button4.innerHTML)
})

function myfun(){
    button5.innerHTML=Number( button1.innerHTML)+ Number( button2.innerHTML) +Number( button3.innerHTML) +Number( button4.innerHTML)
}