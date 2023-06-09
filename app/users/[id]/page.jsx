async function getUser(id){
	const response = await fetch(`https://reqres.in/api/users/${id}`)
	const data = await response.json()
	
	return data.data
}

async function User({params}){

	const user = await getUser(params.id)
	
	return (
		<>
			<h1>{user.first_name} {user.last_name}</h1>
			<p>{user.email}</p>
			<img src={user.avatar} alt="" />
		</>
	)
}

export default User