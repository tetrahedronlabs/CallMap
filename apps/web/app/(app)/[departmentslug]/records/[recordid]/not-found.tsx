import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="mx-auto flex h-screen max-w-screen-xl flex-col items-center justify-center">
			<h1 className="pb-6 text-9xl font-extrabold text-slate-900 ">
				Whoops...
			</h1>
			<h2 className="mb-5 text-center text-xl">
				We weren{"'"}t able to find the record you were looking for.
			</h2>
			<Button>
				<Link href="/">Back to Home</Link>
			</Button>
		</div>
	);
}
