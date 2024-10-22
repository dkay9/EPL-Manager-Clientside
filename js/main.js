document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const managerName = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:3000/api/${managerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName 
        document.querySelector('span').innerText = data.age 
        document.querySelector('p').innerText = data.placeOfBirth
        document.querySelector('h3').innerText = data.plTitles
        document.querySelector('img').src = data.imgUrl

    }catch(error){
        console.log(error)
    }
}
