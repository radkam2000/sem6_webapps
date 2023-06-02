import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const [dane, ustawDane] = useState([]);

	const handleGetUsers = async (e) => {
		const token = localStorage.get("token");
		if (token) {
			try {
				const config = {
					method: "get",
					url: "http://localhost:5000/api/users",
					headers: {
						"Content-Type": "application/json",
						"x-acess-token": token,
					},
				};
				const { data: res } = await axios(config);
				ustawDane(res.data);
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					localStorage.removeItem("token");
					window.location.reload();
				}
			}
		}
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>MySite</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className="content"></div>
		</div>
	);
};
export default Main;
