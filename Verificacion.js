const inputs = document.querySelectorAll('.otp-card-inputs input')
const button = document.querySelector('.otp-card button')

inputs.forEach(input => {
    let lastInputStatus = 0
    input.onkeyup = (e) => {
        const currenElement = e.target
        const nextElement = input.nextElementSibling
        const prevElement = input.previousElementSibling

        if(prevElement && e.keyCode === 0){
            if(lastInputStatus === 1){
                prevElement.value = ''
                prevElement.focus()
            }
            button.setAttribute('disabled', true)
            lastInputStatus = 1
        }else{
            const reg = /^[0-9]+$/
            if(!reg.test(currenElement.value)){
                currenElement.value = currenElement.value.replace(/\D/g,'')
            }else if(currenElement.value){
                if (nextElement){
                    nextElement.focus()
                }else{
                    button.removeAttribute('disabled')
                    lastInputStatus = 0
                }
            }
        } 
    }
})