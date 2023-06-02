const CurrentUser = (props) => {
	const user = props.user;
	return (
		<li>
			{" "}
			First Name:{user.firstName}
			<br />
			Last Name:{user.lastName}
			<br />
			Password:{user.password}
			<br />
			Email:{user.email}
			<br />
		</li>
	);
};
export default CurrentUser;
