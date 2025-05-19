document.addEventListener('DOMContentLoaded', function() {
    console.log('register.js cargado correctamente');
    
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        console.log('Formulario encontrado');
        
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Formulario enviado');
            
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            
            console.log('Datos a enviar:', { name, email, password });
            
            try {
                const response = await fetch('http://localhost:3000/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });
                
                console.log('Respuesta recibida:', response.status);
                
                const data = await response.json();
                console.log('Datos:', data);
                
                if (response.ok) {
                    alert('Usuario registrado exitosamente');
                    window.location.href = 'login.html';
                } else {
                    alert(data.message || 'Error al registrar usuario');
                }
            } catch (error) {
                console.error('Error completo:', error);
                alert('Error al conectar con el servidor: ' + error.message);
            }
        });
    } else {
        console.error('No se encontró el formulario con ID "registerForm"');
    }
});