import React from "react"
import { useParams } from "react-router-dom"
import UserPage from "../components/page/userPage"
import UsersListPage from "../components/page/usersListPage"
import UserEditPage from "../components/page/userEditPage"

const Users = () => {
    const params = useParams()
    const { userId, edit } = params
    /*eslint-disable*/
    return (
        <>
            {userId ? (
                edit ? (
                    <UserEditPage />
                ) : (
                    <UserPage id={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    )
}
/*eslint-disable*/
export default Users
