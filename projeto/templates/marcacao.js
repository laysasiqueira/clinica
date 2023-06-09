function adicionarResultado() {
  var resultadoInput = document.getElementById("resultado");
  var dataInput = document.getElementById("data");
  var horarioInput = document.getElementById("horario");

  var resultado = resultadoInput.value;
  var data = dataInput.value;
  var horario = horarioInput.value;

  if (resultado.trim() !== "" && data.trim() !== "" && horario.trim() !== "") {
      var tabela = document.getElementById("tabelaResultados");
      var corpoTabela = document.getElementById("corpoTabela");

      var novaLinha = document.createElement("tr");
      var novoDado = document.createElement("td");
      novoDado.textContent = resultado;
      novaLinha.appendChild(novoDado);
      corpoTabela.appendChild(novaLinha);

      resultadoInput.value = "";
      dataInput.value = "";
      horarioInput.value = "";

      alert("Campos preenchidos! Consulta marcada com sucesso!");
  }
}