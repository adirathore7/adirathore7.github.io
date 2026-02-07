import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "./authService";
import "./LoginPage.css";

/*
 Login page component. Handles user authentication and navigation.
*/
export default function LoginPage() {
    // local form state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hint, setHint] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // UI state for error messages and loading indicator
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // global auth store and router navigation
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    // form submission handler. Async login and updates global auth state on success.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const user = await loginService(email, password);
            login(user);
            navigate("/");
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="full-height login-container">
            <form onSubmit={handleSubmit} className="form-card" aria-label="Login form">
                <h1 className="form-title gradient-text">Portal Login</h1>
                {error && <p className="error-text">{error}</p>}
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input autoComplete="off"
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <div className="password-wrapper">
                        <input autoComplete="off"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-describedby="password-toggle"
                        />
                        <button type="button" id="password-toggle" className="password-toggle" onClick={() => setShowPassword((v) => !v)}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <button type="submit" disabled={loading} className="button-primary">
                    {loading ? "Logging in..." : "Login"}
                </button>
                
                <div className="login-hint">
                    <a href="#" onClick={() => setHint(!hint)} className="hint-toggle">
                        {hint ? "Hide Hint" : "Show Hint"}
                    </a>
                    {hint && <p>Use <code>test@email.com</code> and <code>test123</code> to log in.</p>}
                </div>
            </form>

        </div>
    );
}