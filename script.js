function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error-message");
    
    // Limpa mensagens de erro anteriores
    errorMessage.textContent = '';

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !message) {
        errorMessage.textContent = 'Todos os campos são obrigatórios!';
        return false;
    }

    // Validação de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido!';
        return false;
    }

    // Se passar por todas as validações, retorna verdadeiro
    alert('Formulário enviado com sucesso!');
    return true; // Aqui você pode enviar o formulário ou fazer outras ações
}
