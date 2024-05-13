'use client';
import * as React from 'react';

import { StatusWidget } from '@openstatus/react';
import Link from 'next/link';
const Footer = () => {
	return (
		<div className="mx-auto max-w-screen-xl">
			<hr className="border-slate-200" />
			<div className="flex items-center justify-between py-4">
				<Link href="https://tetrahedron.dev" className="text-sm text-gray-500 ">
					© {new Date().getFullYear()} Tetrahedron Labs
				</Link>
				<StatusWidget slug="callmap" />
			</div>
		</div>
	);
};

export default Footer;
