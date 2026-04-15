import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [isSignIn, setSignIn] = useState(true);

	const toggleSignIn = () => {
		setSignIn(!isSignIn);
	};

	return (
		<div>
			<Header />

			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
					alt="background"
				/>
			</div>
			<div>
				<form className="absolute bg-black/80 w-3/12 p-12 my-36 mx-auto right-0 left-0 ">
					<h1 className="font-bold text-white py-4">
						{isSignIn ? "Sign In" : "Sign Up"}
					</h1>

					<input
						className="p-2 m-2 bg-gray-700 text-white rounded-lg "
						type="text"
						placeholder="Email or mobile number"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={showPassword}
					/>
					<input
						className="p-2 m-2  bg-gray-700 text-white rounded-lg "
						type="password"
						placeholder="Password"
					/>
					<button className="bg-red-600 rounded-lg p-2 m-5 ">Sing In</button>
					<p className="text-gray-100">
						New to Netflix?{" "}
						<a
							href="#"
							className="text-white hover:underline"
							onClick={toggleSignIn}>
							{isSignIn ? "Sign Up" : "Sign In"}
						</a>{" "}
						now
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
