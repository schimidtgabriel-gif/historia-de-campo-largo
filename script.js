// Exemplo de interatividade simples
// Alerta quando o usuário clica em uma seção
document.querySelectorAll('section.card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Você está visualizando a seção: ${card.querySelector('h2').innerText}`);
    });
});
