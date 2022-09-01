function catchMap(){
    fetch(`https://valorant-api.com/v1/maps/`)
    .then(response => response.json())
    .then(api => {
        console.log(api)
        for(let i = 0; i<=8; i++){
            if(api.data[i].displayName != "The Range"){
                let map = document.querySelector(`#mapSplash${i}`)
                let icon = document.querySelector(`#mapIcon${i}`)
                let title = document.querySelector(`#mapTitle${i}`)
                map.src = api.data[i].splash
                icon.src = api.data[i].displayIcon
                title.innerHTML = api.data[i].displayName
            }else{
                console.log(api.data[i].displayName + " filtrado")
                
            }
        }
        
    })
    .catch(err => console.log(err))
}

catchMap();