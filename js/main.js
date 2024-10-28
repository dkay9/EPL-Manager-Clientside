document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const managerName = document.querySelector('input').value
    try{
        const response = await fetch(`https://epl-managers-api.onrender.com/api/${managerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.name').innerText = data.birthName 
        document.querySelector('.age').innerText = data.age 
        document.querySelector('.placeOfBirth').innerText = data.placeOfBirth
        document.querySelector('.title').innerText = data.plTitles
        document.querySelector('img').src = data.imgUrl

        document.querySelector('.info').classList.remove('noShow')
        document.querySelector('.info1').classList.remove('noShow')
        document.querySelector('.info2').classList.remove('noShow')
        document.querySelector('.info3').classList.remove('noShow')

        document.querySelector('img').classList.remove('noShow')
        document.querySelector('.text-content').classList.remove('noShow')
        // document.querySelector('img').classList.remove('noShow')

    }catch(error){
        console.log(error)
    }
}
