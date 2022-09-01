console.log('Client side javascript file is loaded!')
const message1=document.getElementById('para1')
const message2=document.getElementById('para2')
const form=document.querySelector('form')
const search=document.querySelector('input')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    console.log(location)
    message1.textContent="loading..."
    message2.textContent=""
    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
            message1.textContent='please provide a valid location'
        }
        else {
            message1.textContent=""
            message2.textContent=data.forecast+' in '+data.location
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})



})