import { useState } from 'react';

export default function Register() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState(null);       // ✅ Corregido
    const [loading, setLoading] = useState(false);  // ✅ Corregido

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/register", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, correo, contrasena, rol: "jugador" })
            });
            if (!response.ok) {
                const data = await response.json();
                setError(data.error || "Error en el registro");
                setLoading(false);
                return;
            }
            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert("Registro exitoso");
        } catch (err) {
            setError("Error de conexión");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <div className="form-container">
                <h1>Crear una Cuenta</h1>
                {error && <div className="error-message">{error}</div>}
                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="registerName">Nombre:</label>
                        <input 
                            type="text" 
                            id="registerName" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="registerEmail">Correo Electrónico:</label>
                        <input 
                            type="email" 
                            id="registerEmail" 
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="registerPassword">Contraseña:</label>
                        <input 
                            type="password" 
                            id="registerPassword" 
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="form-button" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrarse'}
                    </button>
                </form>
                
                <div className="form-footer">
                    <p>¿Ya tienes una cuenta? <a href="login.html">Inicia sesión aquí</a></p>
                    <p><a href="landing_page.html">Volver al inicio</a></p>
                </div>
            </div>
        </section>
    );
}