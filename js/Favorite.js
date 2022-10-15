const heart = document.getElementById('heart')

heart.addEventListener('click',(evt)=>{
    const {target} = evt;
    console.log({target})
})