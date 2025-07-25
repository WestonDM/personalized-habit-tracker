export default function Login({ onHTxtChange }) {
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
                                onHTxtChange(
                                    "Personalized Habit Tracker",
                                    "Welcome back! Please continue tracking your habits."
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
