teste = (e)->
  
  $(e).hide()
  
  alert('Hello World!')
  $('h1').css 'color', 'red'
  $('p').css 'color', 'blue'
  
  button = $('<button>').html 'Iniciar novamente'
  $('p').after button
  
  button.click -> window.location.href = ''
  
configurarTudo = ->
  $('body').append $('<p>').html 'lorem ipsum, conteúdo adicionardo dinamicamente'
  
configurarTudo()