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
  var linhas = legenda.split("\n\n");
  var legendaComCor = "";

  for (var i = 0; i < linhas.length; i++) {
    var linhaAtual = linhas[i].split("\n");
    var tempo = linhaAtual[1];
    var texto = linhaAtual.slice(2).join("\n");
    
    legendaComCor += linhaAtual[0] + "\n" + tempo + "\n";
    legendaComCor += '<font color="' + cor + '" size="' + tamanho + '">' + texto + '</font>\n\n';
  }

  document.getElementById("resultado").innerHTML = legendaComCor;
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
