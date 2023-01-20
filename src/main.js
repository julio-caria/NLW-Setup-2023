const form = document.getElementById("form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-03"],
  water: ["01-18", "01-19", "01-20"],
  food: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
  read: [],
  studies: ["01-19", "01-20"],
}

nlwSetup.setData(data)
nlwSetup.load()
