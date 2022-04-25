const html = document.getElementById('html')
const url = "http://localhost:8000/personajes-principales"

fetch(url,{
    method: "GET"
}).then(res => res.json()).then(info =>{
    const {personajes} = info
    console.log(personajes)

    for (const x of personajes) {

        const container = document.createElement("div")
        container.classList.add('container')
        html.appendChild(container)

        const ficha = document.createElement("article")
        ficha.classList.add('ficha')
        container.appendChild(ficha)

        const image = document.createElement("img")
        image.src = x.img
        image.style.width = "270px"
        image.style.height = "270px"
        ficha.appendChild(image)

        const containerInfo = document.createElement("div")
        containerInfo.classList.add('container-info')
        ficha.appendChild(containerInfo)

        const name = document.createElement("h2")
        name.innerText = x.nombre
        name.classList.add('titulo')
        containerInfo.appendChild(name)

        const character = document.createElement('h3')
        character.innerText = x.naturaleza
        character.classList.add('info1')
        containerInfo.appendChild(character)

        const subtitle = document.createElement("span")
        subtitle.innerText ="Habilidad:"
        subtitle.classList.add('subtitle')
        containerInfo.appendChild(subtitle)

        const skill = document.createElement('p')
        skill.innerText = x.habilidad
        skill.classList.add('info')
        containerInfo.appendChild(skill)

        const subtitle1 = document.createElement("span")
        subtitle1.innerText ="Pecado:"
        subtitle1.classList.add('subtitle')
        containerInfo.appendChild(subtitle1)

        const sin = document.createElement("p")
        sin.innerText = x.pecado
        sin.classList.add('info')
        containerInfo.appendChild(sin)

        const subtitle2 = document.createElement("span")
        subtitle2.innerText ="Símbolo:"
        subtitle2.classList.add('subtitle2')
        containerInfo.appendChild(subtitle2)

        const symbol = document.createElement("p")
        symbol.innerText = x.simbolo
        symbol.classList.add('info')
        containerInfo.appendChild(symbol);
    
    }
})