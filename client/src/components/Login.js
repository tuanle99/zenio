import React, { Component } from "react";
import "./styles/login.css";

class Login extends Component {
	render() {
		return (
			<div class="login-page">
				<div class="form">
					<form class="register-form">
						<input type="text" placeholder="name" />
						<input type="password" placeholder="password" />
						<input type="text" placeholder="email address" />
						<button>create</button>
						<p class="message">
							Already registered? <a href="#">Sign In</a>
						</p>
					</form>
					<form class="login-form">
						<input type="text" placeholder="username" />
						<input type="password" placeholder="password" />
						<button>login</button>
						<p class="message">
							Not registered? <a href="#">Create an account</a>
						</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
