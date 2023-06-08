import Users from "@/components/Users"

async function fetchUsers(){
    const response = await fetch("https://reqres.in/api/users")
    const data = await response.json()
    
    return data.data
}

async function UsersPage(){
    const users = await fetchUsers()
    return (
        <Users users={users}/>
    )
}

export default UsersPage