/**
 * @author Leonardo Bernardes
 * @version 1.0.0
 * 
 * Criado em: 14/02/2019
 * 
 * Função responsável por popular a tabela usuários
 * utilizando como entradas um arquivo JSON requisitado via Ajax
 * 
 * @param string URL http://jsonplaceholder.typicode.com/users
 * @param string Nome
 * @param string USERNAME
 * @param string E-MAIL
 * @returns NULL
 * 
 * ESPECIFICAÇÕES DO AJAX
 * URL: Link no qual os dados estão sendo disponibilizados no formato JSON
 * TYPE: Tipo de requisição a ser feito ao navegador (GET, POST)
 * SUCCESS: realiza determinda ação ao concluir  com exito a solicitação
 * 
 * SCROLL
 * Realiza uma animação do tipo ScrollTop até a Tabela de Usuários ao realizar o 
 * clique no botão "Clique Aqui"
 */
function carregarUsuarios() {
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/users",
        type: 'GET',
        success: function (usuarios) {
            for (i in usuarios) {
                $('#usuarios tr:last').after('<tr><td>' + usuarios[i].name + '</td><td>' + usuarios[i].username + '</td><td>' + usuarios[i].email + '</td></tr>');
            }
        }
    });

    $('html, body').animate({ scrollTop: $("#tabela").offset().top }, 1200);
}
