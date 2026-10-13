const btnSeleccionar = async () => {

    try {
        const url = "https://dog.ceo/api/breeds/image/random"
        const request = await fetch(url)
        const response = await request.json()
        const lista = document.getElementById("listarperro")
        const item = lista.querySelector("#perro")
        item.querySelector("img").src = response.message
        item.querySelector("a").textContent = response.message
    } catch (error) {

        console.error("Error:", error)
    }
}


btnSeleccionar()
