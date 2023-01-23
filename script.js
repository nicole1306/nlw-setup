const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)
// .addEventListener cria eventos, eles disparam uma função

function add() {
  const today = new Date().toLocaleString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSeptup@habits", JSON.stringify(nlwSetup.data))
}
// a função serve para agrupar código e pode ser usada a qualquer momento

const data = JSON.parse(localStorage.getItem("NLWSeptup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

