import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
import Users from "./Users";
import CurrentUser from "./CurrentUser";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const [dane, ustawDane] = useState([]);
	const [daneCurrent, setDaneCurrent] = useState();
	const [msg, setMsg] = useState("");
	const [userBtn, setUserBtn] = useState(false);
	const [userInfoBtn, setUserInfoBtn] = useState(false);

	const handleGetUsers = async (e) => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const config = {
					method: "get",
					url: "http://localhost:5000/api/users",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": token,
					},
				};
				const { data: res } = await axios(config);
				ustawDane(res.data);
				setMsg(res.message);
				setUserBtn(true);
				setUserInfoBtn(false);
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

	const handleGetUserInfo = async (e) => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const config = {
					method: "get",
					url: "http://localhost:5000/api/users/user",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": token,
					},
				};
				const { data: res } = await axios(config);
				setDaneCurrent(res.data);
				setMsg(res.message);
				setUserInfoBtn(true);
				setUserBtn(false);
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

	const usun = async (e) => {
		if (window.confirm("Na pewno chcesz usunac konto?") == true) {
			const token = localStorage.getItem("token");
			if (token) {
				try {
					const config = {
						method: "delete",
						url: "http://localhost:5000/api/users/user",
						headers: {
							"Content-Type": "application/json",
							"x-access-token": token,
						},
					};
					const { data: res } = await axios(config);
					setDaneCurrent(res.data);
					setMsg(res.message);
					setUserInfoBtn(true);
					setUserBtn(false);
					localStorage.removeItem("token");
					window.location.reload();
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
			<div className={styles.navbar}>
				<button className={styles.white_btn} onClick={handleGetUsers}>
					users
				</button>
				<button
					className={styles.white_btn}
					onClick={handleGetUserInfo}>
					info
				</button>
				<button className={styles.white_btn} onClick={usun}>
					usun
				</button>
			</div>

			<div className="content">
				{userBtn ? msg : ""}
				{userBtn ? <Users users={dane} /> : ""}

				{userInfoBtn ? msg : ""}
				{userInfoBtn ? <CurrentUser user={daneCurrent[0]} /> : ""}
			</div>
		</div>
	);
};
export default Main;
