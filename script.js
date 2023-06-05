function carregaLegenda(event) {
  var legenda = event.target.files[0];
  var leitor = new FileReader();

  leitor.onload = function () {
    var legendaTexto = leitor.result;
    document.getElementById("textoLegenda").value = legendaTexto;
  };

  leitor.readAsText(legenda);
}

function selecionaCor() {
  var cor = document.getElementById("corSelecionada").value;
  document.getElementById("corSelecionadaValor").value = cor;
}

function aplicaCor() {
  var cor = document.getElementById("corSelecionadaValor").value;
  var tamanho = document.getElementById("tamanhoSelecionado").value;
  var legenda = document.getElementById("textoLegenda").value;
  var legendaComCor = legenda.replace(
    /^(.*\d{2}:\d{2}:\d{2},\d{3})\n(.*)$/gm,
    '$1\n<font color="' + cor + '" size="' + tamanho + '">$2</font>'
  );
  document.getElementById("resultado").value = legendaComCor;
}

function copiarTexto() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");
}

function selecionaTamanho() {
  var tamanho = document.getElementById("tamanhoSelecionado").value;
  document.getElementById("valorTamanhoSelecionado").textContent = tamanho;
}

function salvarArquivo() {
  var content = document.getElementById("resultado").value;
  var filename = "legenda.srt";
  var blob = new Blob([content], { type: "text/srt" });
  saveAs(blob, filename);
}
