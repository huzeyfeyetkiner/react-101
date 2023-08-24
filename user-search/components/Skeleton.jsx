import React from "react"

function Skeleton() {
	return (
		<div className="flex flex-row items-center p-12 gap-3 animate-pulse">
			<div className="w-[200px] h-[200px] bg-slate-200 rounded-md"></div>
			<div className="flex flex-col gap-y-2">
				<div className="w-[200px] h-[20px] bg-slate-200"></div>
				<div className="w-[200px] h-[20px] bg-slate-200"></div>
				<div className="w-[200px] h-[20px] bg-slate-200"></div>
			</div>
		</div>
	)
}

export default Skeleton
