const nums=document.querySelectorAll(".nums span")
const counter=document.querySelector(".counter")
const finalMessage=document.querySelector(".final")
const replay=document.querySelector("#replay")

runAnimation()

function resetDOM() {
    counter.classList.remove("hide")
    finalMessage.classList.remove("show")

    nums.forEach((num) => {
        num.classList.value=''
    })+

    nums[0].
        classList.add("in")
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length -1

        nums.addEventListener('animationed',(e)=>{
            if(e.animationName ==='goin' && idx !== nextToLast){
                nums.classList.remove("in")
                num.classList.add("out")
            }else if(e.animationName === 'goout' && nums.nextElementSibling){
                nums.nextElementSibling.classList.add("in")
            }else{
                cocunter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click',()=>{
    resetDOM()
    runAnimation()
})