async function getUserInfo(id: string) {
    // const res = await fetch(`http://localhost:8000/api/auth/user/${id}`);
    // const data = await res.json();
    return "data";

}

const UserDetails = async ({ params }: { params: { id: string } }) => {

    const data = await getUserInfo(params.id)

    // const user = data.info.user

    // console.log("My data", user)

    return (
        <div>User details</div>
        // <div>{JSON.stringify(user)}</div>
    )
}

export default UserDetails
