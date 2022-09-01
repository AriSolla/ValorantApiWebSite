showArsenal();

function showArsenal(){
    fetch(`https://valorant-api.com/v1/weapons/`)
    .then(response => response.json())
    .then(api => {
        console.log(api)
        for(let i = 0; i<api.data.length; i++){

            document.querySelectorAll(`.gun-name-${i}`).forEach((option) => {
                option.innerHTML = api.data[i].displayName
            });
            document.querySelectorAll(`.gun-icon-${i}`).forEach((option) => {
                option.src = api.data[i].displayIcon
            });
            document.querySelectorAll(`.gun-type-${i}`).forEach((option) => {
                option.innerHTML = `Types \\ ${api.data[i].shopData.categoryText}`
            });            
               
            console.log(api.data[i].displayName)    
        }        
    })
    .catch(err => console.log(err))
}


let itemBoxExpanded = document.querySelector("#item-box-expanded")

document.querySelectorAll('.item-hover').forEach((option) => {
    option.addEventListener('click', (e) => {
		itemBoxExpanded.classList.add("show")
	});
});
document.querySelectorAll('#close').forEach((option) => {
    option.addEventListener('click', (e) => {
		itemBoxExpanded.classList.remove("show")
	});
});






