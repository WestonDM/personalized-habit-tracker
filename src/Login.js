export default function Login({ onHTxtChange, username }) {
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
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();

                                let userMsg = "";

                                username = e.target.form.username.value;
                                username !== ""
                                    ? (userMsg = `Welcome back, ${username}!`)
                                    : (userMsg = `Welcome back!`);

                                onHTxtChange(
                                    "Personalized Habit Tracker",
                                    userMsg
                                );
                            }}
                            className="btn"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </>
        </div>
    );
}
