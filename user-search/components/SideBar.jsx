"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FaGripLines } from "react-icons/fa"

function SideBar() {
	const [search, setSearch] = useState("")
	const [users, setUsers] = useState([])
	const [toggle, setToggle] = useState(true)

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
		<>
			<div className="relative min-h-screen flex flex-col bg-slate-700 shadow-md shadow-zinc-600 mobile:p-8 p-3 py-6 transition-all duration-300 delay-200">
				<div>
					<button
						onClick={() => setToggle(!toggle)}
						className={` right-3 top-3 p-2 rounded-md bg-slate-600 hover:bg-slate-500 transition-all duration-300 delay-200 ${
							toggle ? "absolute" : ""
						}`}
					>
						<FaGripLines color="white" />
					</button>
				</div>
				{toggle && (
					<div className=" flex flex-col ">
						<div className="sticky top-0 p-4">
							<input
								placeholder="Search for users"
								className="rounded-md h-10 outline-none px-4"
								type="text"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
						{users.length > 0 &&
							users.map((user) => {
								return (
									<Link
										className="text-white hover:bg-gray-50 hover:text-slate-500 rounded-md py-3 px-6"
										href={`/${user.id}`}
										key={user.id}
									>
										{user.firstName} {user.lastName}
									</Link>
								)
							})}
						{users.length < 1 && (
							<div className="text-white py-3 px-6 ">
								There is no result...
							</div>
						)}
					</div>
				)}
			</div>
		</>
	)
}

export default SideBar
