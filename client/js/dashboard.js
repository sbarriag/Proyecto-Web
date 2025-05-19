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
    fetchStats(user.id);
    
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
    // Función para obtener las estadísticas del usuario
async function fetchStats(userId) {
    try {
        const response = await fetch(`http://localhost:3000/api/stats/${userId}`);
        const data = await response.json();
        
        if (response.ok) {
            // Actualizamos las estadísticas en la interfaz
            updateStatsUI(data.stats);
        } else {
            console.error('Error al obtener estadísticas:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Función para actualizar las estadísticas del usuario
async function updateStats(userId, win) {
    try {
        const response = await fetch(`http://localhost:3000/api/stats/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ win })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Actualizamos las estadísticas en la interfaz
            updateStatsUI(data.stats);
            
            // Mostramos un mensaje según el resultado
            if (win) {
                alert('¡Has ganado la partida!');
            } else {
                alert('Has perdido la partida. ¡Mejor suerte la próxima vez!');
            }
        } else {
            console.error('Error al actualizar estadísticas:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Función para actualizar la interfaz con las estadísticas
function updateStatsUI(stats) {
    const statsElements = document.querySelectorAll('.stat-value');
    
    if (statsElements.length >= 3) {
        statsElements[0].textContent = stats.gamesPlayed;
        statsElements[1].textContent = stats.wins;
        statsElements[2].textContent = stats.level;
    }
}

});

