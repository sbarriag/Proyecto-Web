import { useState } from 'react'; 
//import { AuthContext } from '../auth/AuthContext';

export default function Login() {
    // ESTO VA CON EL CAMBIO QUE TIRA ERROR
    //const { token, setToken } = useContext(AuthContext);
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState(null);  // ✅ Corregido

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ correo, contrasena })
            });
            
            if (!response.ok) {
                const data = await response.json();
                setError(data.error || "Error en el login");
                return;
            }
            
            const data = await response.json();
            // ESTO ME FALTA ARREGLAR PORQUE AL CAMBIARLO LANZA ERROR
            // const access_token = data.token;
            // setToken(access_token);
            localStorage.setItem("token", data.token);
            alert("Login exitoso"); 
        } catch (err) {
            setError("Error de conexión");
        }
    };

    return (
        <section>
            <div className="form-container">
                <h1>Iniciar Sesión</h1>
                {error && <div className="error-message">{error}</div>}
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="loginEmail">Correo:</label>
                        <input 
                            type="email" 
                            id="loginEmail"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="loginPassword">Contraseña:</label>
                        <input 
                            type="password" 
                            id="loginPassword" 
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="form-button">Iniciar Sesión</button>
                </form>
                
                <div className="form-footer">
                    <p>¿No tienes una cuenta? <a href="register.html">Regístrate aquí</a></p>
                    <p><a href="landing_page.html">Volver al inicio</a></p>
                </div>
            </div>
        </section>
    );
}