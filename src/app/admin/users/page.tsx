import { RolesList } from "@/components/users/RoleList";
import Link from "next/link";
import { Suspense } from "react";

async function getAllUsers() {
    const res = await fetch('http://localhost:8000/api/users/?page=1&items=3&atribute=lastName');
    const data = await res.json();
    return { props: { data } };
}

async function Users() {

    const users = await getAllUsers()

    console.log('users', users.props.data.info.users);

    return (
        <div>
            <h3>Usuarios</h3>
            {users.props.data.info.users.map((user: unknown) => (

                <Link href={`users/${user?.id}`}>
                    <p>
                        {user?.name + " " + user?.lastName}
                    </p>
                </Link>

            ))}
            <Suspense fallback={<h1>loading... </h1>}>

                <RolesList />
            </Suspense>
            {/* <button onClick={() => { alert('olo')}}></button> */}
        </div>
    )
}

export default Users