const body=document.querySelector("body")
const instruction=document.querySelector("#instruction")
const formone=document.querySelector(".formone")
const formtwo=document.querySelector(".formtwo")
const formthree=document.querySelector(".formthree")
const form1=document.querySelector("#form1")
const form2=document.querySelector("#form2")
const form3=document.querySelector("#form3")
const ans=document.querySelector("#ans")
const ans2=document.querySelector("#ans2")
const ans3=document.querySelector("#ans3")
const vveu=document.querySelector("#vveu")
const veu=document.querySelector("#veu")
const eu=document.querySelector("#eu")
const tdy=document.querySelector("#tdy")
const thpeb=document.querySelector("#thpeb")
const twpeb=document.querySelector("#twpeb")
const thpet=document.querySelector("#thpet")
const twpet=document.querySelector("#twpet")
const gvf=document.querySelector("#gvf")
const emf=document.querySelector("#emf")
const win=document.querySelector("#win")
const sin=document.querySelector("#sin")
const info=document.querySelector(".info")
const info2=document.querySelector(".info2")
const info3=document.querySelector(".info3")
const empty=document.querySelector(".empty")
const empty2=document.querySelector(".empty2")
const empty3=document.querySelector(".empty3")

instruction.addEventListener("click",
function(){
    window.alert(" INSTRUCTIONS:        This is a quiz on what you have learnt till now on this website. It includes just three questions.Try it out! If you don't succeed at the first attempt, you can always go and try again by reloading the tab. Give it a try and enjoy!!! 😊😃")
})

vveu.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    ans.innerText=""
    empty.innerText="🥺😭"
})
veu.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="lime"
    info.value="CORRECT!!!"
    info.className="right"
    ans.innerText=""
    empty.innerText="😊😃"
})
eu.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    ans.innerText=""
    empty.innerText="🥺😭"
})
tdy.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    ans.innerText=""
    empty.innerText="🥺😭"
})

thpeb.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="lime"
    info2.value="CORRECT!!!"
    info2.className="right"
    ans2.innerText=""
    empty2.innerText="😊😃"
})
twpeb.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    ans2.innerText=""
    empty2.innerText="🥺😭"
})
thpet.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    ans2.innerText=""
    empty2.innerText="🥺😭"
})
twpet.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    ans2.innerText=""
    empty2.innerText="🥺😭"
})

gvf.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="lime"
    info3.value="CORRECT!!!"
    info3.className="right"
    ans3.innerText=""
    empty3.innerText="😊😃"
})
emf.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    ans3.innerText=""
    empty3.innerText="🥺😭"
})
win.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    ans3.innerText=""
    empty3.innerText="🥺😭"
})
sin.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    ans3.innerText=""
    empty3.innerText="🥺😭"
})