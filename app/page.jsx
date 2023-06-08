import Users from "@/components/Users"

async function fetchUsers(){
  const response = await fetch("https://reqres.in/api/users")
  const data = await response.json()
  
  return data.data
}

async function IndexPage(){
  const users = await fetchUsers()
  return (
    <>
      <h1>Index Page</h1>
      <Users users={users} />
    </>
  )
}

export default IndexPage