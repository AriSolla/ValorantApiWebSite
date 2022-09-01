/*-------------------------------------------DropDown-------------------------------------------------- */
const select = document.querySelector('#select');
const options = document.querySelector('#options');
const infoDiv = document.querySelector("#info-row")
const abilitiesDiv = document.querySelector("#abilities-row")
const selectedContent = document.querySelector('#select .selected-content');
const hiddenInput = document.querySelector('#inputSelect')

document.querySelectorAll('#options > .option').forEach((option) => {
	option.addEventListener('click', (e) => {
		e.preventDefault();
		selectedContent.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		options.classList.toggle('active');

		let agent = e.currentTarget.querySelector('.agent-texts')
    	console.log(agent.dataset.agentId)
    	hiddenInput.value = agent.dataset.agentId
		console.log(hiddenInput.value)

		agentSelection(hiddenInput.value)
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	options.classList.toggle('active');
	infoDiv.classList.remove('hidden');
	abilitiesDiv.classList.remove('hidden');

});
/*----------------------------------------------------------------------------------------------------------- */

/*-------------------------------------------Desktop-------------------------------------------------- */

document.querySelectorAll('.agent').forEach((agent) => {
	agent.addEventListener('click', (e) => {
		e.preventDefault();
		infoDiv.classList.remove('hidden');
		abilitiesDiv.classList.remove('hidden');
		/*Verifica si hay algun "agent active" y los cambia a los que lo tengan activo*/
		document.querySelectorAll('.agent').forEach((agent) => {
			if(agent.classList.value == "agent active"){
				agent.classList.value = "agent"
			}
		});
		
		let agentSelected = e.currentTarget.querySelector('.agent-name')
    	hiddenInput.value = agentSelected.dataset.agentId
		console.log(hiddenInput.value)

		let agentHover = e.currentTarget
		agentHover.classList.toggle('active')

		agentSelection(hiddenInput.value)

	});

});


function agentSelection(agents){
    fetch(`https://valorant-api.com/v1/agents/${agents}`)
    .then(response => response.json())
    .then(api => {
        console.log(api)
        showAgent(api)
    })
    .catch(err => alert(`Error: ${err} | Actualiza la página`))
}
function showAgent(agent){
    console.log(agent.data.displayName)
    console.log(agent.data.description)
	let showHrRole = document.querySelector("#hr-role")
	showHrRole.classList.add('active')
	let showHrtitle = document.querySelector("#hr-title")
	showHrtitle.classList.add('active')
	let showBackgroundAgent = document.querySelector(".agent-img-role")
	showBackgroundAgent.classList.add('active')
	let hideAgentSelectTitle = document.querySelector("#agent-select-container")
	hideAgentSelectTitle.classList.add('hidden')

	/*Inserta el nombre del Agente */
	let agentName = document.querySelector('#agent-img-name')
    agentName.innerHTML = agent.data.displayName
    
	/*Inserta la imagen del agente */
    let agentImg = document.querySelector('#agent-img')
    agentImg.src = agent.data.fullPortrait

	/*Inserta el rol del agente*/
	let agentRoleSpan = document.querySelector("#agent-role-span")
	agentRoleSpan.innerHTML = `\\ Rol`

	let agentRoleTitle = document.querySelector("#agent-role-title")
	agentRoleTitle.innerHTML = agent.data.role.displayName

	let agentRoleIcon = document.querySelector("#agent-role-icon")
	agentRoleIcon.src = agent.data.role.displayIcon

	let agentRoleDescrip = document.querySelector("#agent-role-descrip")
	agentRoleDescrip.innerHTML = agent.data.role.description

	/*Inserta la biografia del agente*/
	let agentBiographyTitle = document.querySelector("#biography-title")
	agentBiographyTitle.innerHTML = `Biography`

	let agentBiographyDescript = document.querySelector("#biography-descrip")
	agentBiographyDescript.innerHTML = agent.data.description

	/*Inserta el titulo de la habilidad*/
	let abilitiesTitle = document.querySelector("#abilities-title")
	abilitiesTitle.innerHTML = `Special Abilities`


	/*Inserta las habilidades*/
	let showBackgroundGradient = document.querySelector(".abilities")
	showBackgroundGradient.classList.add('active')
	showAbilities(agent)
	
}
function showAbilities(agent){
	for(let i = 0; i<=3; i++){
		let abilitieImg = document.querySelector(`#abilitie-${i+1}-img`)
		let abilitieName = document.querySelector(`#abilitie-${i+1}-name`)
		let abilitieDescrip = document.querySelector(`#abilitie-${i+1}-descrip`)
		abilitieImg.src = agent.data.abilities[i].displayIcon;
		abilitieName.innerHTML = agent.data.abilities[i].displayName;
		abilitieDescrip.innerHTML = agent.data.abilities[i].description;
	}
}