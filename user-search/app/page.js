import Skeleton from "@/components/Skeleton"

export default async function User() {
	return (
		<div className="sticky top-0 flex flex-col p-12 gap-3">
			<h1 className="text-4xl font-medium">User Search Application</h1>
			<p className="text-lg font-light">
				You can click any user from the sidebar and also can search
				between the user with the textbox on it.
			</p>
			<p className="text-lg font-light">
				Project created with Next.js, TailwindCSS, and DummyJSON.
			</p>
		</div>
	)
}
