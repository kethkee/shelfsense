import "./LoginForm.css";
function LoginForm() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label>Shop Name</label>
                <input type="text" />
            </div> 
            <div className="form-group">
                <label>Password</label>
                <input type="password" />
            </div>
                <button>Login</button>

            
        </div>
    );
}

export default LoginForm;