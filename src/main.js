const form = document.getElementById("form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button");

button.addEventListener('click', add);
form.addEventListener('change', save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today);

  if(dayExists) {
    alert("❌ Dia já incluso!");
    return;
  } 
  alert("✅ Dia adicionado com sucesso!");
  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem('NLWSetup@Habits', JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-03"],
//   water: ["01-18", "01-19", "01-20"],
//   food: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
//   read: [],
//   studies: ["01-19", "01-20"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()
