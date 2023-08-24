"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"

function SideBar() {
	const [search, setSearch] = useState("")
	const [users, setUsers] = useState([])

	useEffect(() => {
		;(async () => {
			const res = await fetch(
				`https://dummyjson.com/users/search?q=${search}`
			)
			const data = await res.json()
			setUsers(data.users)
		})()
	}, [search])

	return (
		<div className="min-h-screen flex flex-col bg-slate-700 shadow-md shadow-zinc-600 p-2">
			<div className="sticky top-0 p-4">
				<input
					placeholder="Search for users"
					className="rounded-md h-10 outline-none px-4"
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			{users.map((user) => {
				return (
					<Link
						className="text-white hover:bg-gray-50 hover:text-slate-500 rounded-md py-3 px-6"
						href={`/${user.id}`}
						key={user.id}
					>
						{user.firstName}
					</Link>
				)
			})}
		</div>
	)
}

export default SideBar
