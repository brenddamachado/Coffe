 // Função para atualizar o campo de valor x quantidade quando uma opção é selecionada
 document.getElementById('selMaquina').addEventListener('change', function() {
    // Obtém o valor selecionado
    var selectedValue = this.value;

    // Atualiza o campo de valor x quantidade
    document.getElementById('TxtValUnit').value = 'R$' + selectedValue;
  });