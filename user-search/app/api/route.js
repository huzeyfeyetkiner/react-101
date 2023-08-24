export async function getUsers() {
	const res = await fetch("https://dummyjson.com/users")
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	return res.json()
}

export async function getUser(id) {
	const res = await fetch(`https://dummyjson.com/users/${id}`)
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	return res.json()
}

export async function searchUsers(search) {
	const res = await fetch(`https://dummyjson.com/users/search?q=${search}`)
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	return res.json()
}
