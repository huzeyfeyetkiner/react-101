import { getUser } from "../api/route"
import Image from "next/image"
import { ImageLoader } from "next/image"

export default async function User({ params: { user } }) {
	const data = await getUser(user)

	return (
		<div className="flex flex-row items-center p-12">
			<div>
				<Image
					loading="lazy"
					src={data.image}
					alt="avatar"
					width={200}
					height={200}
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<p className="text-2xl font-medium">
					{data.firstName} {data.lastName}
				</p>
				<p className="text-xl font-light">{data.email}</p>
				<p className="text-xl font-light">{data.phone}</p>
			</div>
		</div>
	)
}
