document.addEventListener('DOMContentLoaded', function() {
    // Verificamos si el usuario ha iniciado sesión
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
        // Si no hay usuario en localStorage, redirigimos al login
        window.location.href = 'login.html';
        return;
    }
    
    // Mostramos el nombre del usuario
    const usernameElement = document.querySelector('.username');
    if (usernameElement) {
        usernameElement.textContent = user.name;
    }
    
    // Obtenemos las estadísticas del usuario
    //fetchStats(user.id);
    
    // Configuramos el botón de cerrar sesión
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Limpiamos el localStorage
            localStorage.removeItem('user');
            // Redirigimos al inicio
            window.location.href = 'landing_page.html';
        });
    }
});

