export default function Login() {
    return (
        <div className="login">
            <>
                <form className="login_form">
                    <div className="form_row">
                        <label for="username" className="h3">
                            Username
                        </label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="form_row">
                        <label for="password" className="h3">
                            Password
                        </label>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="form_row">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </>
        </div>
    );
}
