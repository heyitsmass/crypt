import Image from "next/image";

export default function Home() {
	return (
		<main className="h-full items-center justify-center flex">
			<div className="border h-[90vh] w-2xl rounded-xl bg-zinc-800 border-zinc-900 shadow-lg flex flex-col">
				<div className="h-[80%] flex flex-col items-center justify-center">
					<div className="border h-[80%] w-xl min-h-max rounded-lg shadow-lg border-zinc-700"></div>
				</div>
				<div className="flex flex-col items-center justify-center h-[20%]">
					<form className="bg-zinc-900 border w-xl px-6 py-4 rounded-xl border-zinc-800 shadow-lg pb-6 ">
						<label className="text-xs leading-6 opacity-80">
							Enter a prompt to create a password.
						</label>
						<div className="flex gap-4">
							<input
								type="text"
								className="border w-full px-4 py-2 rounded-lg border-zinc-800 bg-zinc-700 focus:border-indigo-400 outline-none placeholder:italic"
								placeholder="An anime character holding a sword..."
							/>
							<button
								type="submit"
								className="border rounded-md px-2 border-indigo-400 bg-zinc-900 hover:bg-zinc-800 hover:border-indigo-500 cursor-pointer text-sm"
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
