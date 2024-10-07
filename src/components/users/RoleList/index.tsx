"use client"

import { useAxios } from "@/hooks/useAxios"
import { useEffect, useState } from "react"

export const RolesList = () => {

    const { get, response, isLoading } = useAxios()
    const [roles, setRoles] = useState<unknown[]>()
    useEffect(() => {
        get('roles/?page=1&items=100')
    }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(() => {
        setRoles(response?.info?.roles as unknown[])
    }, [response])

    return (
        <div>
            <h6>Role list</h6>

            {isLoading ? <h1>Cargando...</h1> :
                roles?.map((role: unknown) => (

                    <p>{role?.name}</p>

                ))}

        </div>
    )
}
