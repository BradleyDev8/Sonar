import { ComputerDesktopIcon } from "@heroicons/react/24/outline"

export function Footer() {
	return (
		<footer className="footer p-10 bg-neutral text-neutral-content flex w-full justify-center">
			<div className='flex flex-col'>
				<div className='flex flex-row space-x-4 text-xl'>
					<ComputerDesktopIcon className='h-6 w-6' />
					<p>Built by <a
						href="https://kyled.wtf"
						className="text-primary font-bold hover:underline"
					>
						Kyle Davidson
					</a>
					</p>
				</div>
			</div>
		</footer>
	)
}