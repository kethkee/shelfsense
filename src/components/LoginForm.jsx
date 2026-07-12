import "./LoginForm.css";
function LoginForm() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <label>Shop Name</label>
            <input type = "text" />
            <label>Password</label>
            <input type = "password" />
            <button>Login</button>

            
        </div>
    );
}

export default LoginForm;