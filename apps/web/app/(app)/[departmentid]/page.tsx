import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getDepartment } from '@/lib/department';
import { formatDate, getDayOfWeek, getTimeSince } from '@/lib/utils';
import {
	BarChartBigIcon,
	CalculatorIcon,
	FileUpIcon,
	MapPinIcon,
} from 'lucide-react';

export default async function Campus({
	params: { departmentid },
}: {
	params: { departmentid: string };
}) {
	const department = await getDepartment(departmentid);

	if (!department) {
		return <div>Campus not found</div>;
	}

	return (
		<div className="mx-auto max-w-screen-xl py-2">
			<Tabs defaultValue="latest">
				<Card className="flex flex-col items-center justify-between p-4 lg:flex-row">
					<div className="flex items-center">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={department.logo}
							alt={`${department.name} Logo`}
							className="h-20 w-20"
							height={80}
							width={80}
							draggable={false}
						/>
						<div className=" text-4xl font-medium text-slate-900">
							{department.name}
						</div>
					</div>
					<TabsList>
						<TabsTrigger value="latest">Latest</TabsTrigger>
						<TabsTrigger
							value="historical"
							data-umami-event="Historical Tab"
							data-umami-event-campus={department.name}
						>
							Historical
						</TabsTrigger>
					</TabsList>
				</Card>
				<TabsContent value="latest">
					<div className="grid gap-2 lg:grid-cols-4">
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">Data From</CardTitle>
								<FileUpIcon />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">
									{getDayOfWeek(department.last_updated) +
										', ' +
										formatDate(department.last_updated)}
								</div>
								<div className="flex items-center">
									<p className="text-xs text-gray-500 dark:text-gray-400">
										Updated {getTimeSince(department.last_updated)}
									</p>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Total Incidents
								</CardTitle>
								<CalculatorIcon />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">20</div>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									+2.1% from last month
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Most Common Incident
								</CardTitle>
								<BarChartBigIcon />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">Theft</div>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									4 of total incidents
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Most Common Location
								</CardTitle>
								<MapPinIcon />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">Geisel Library</div>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									-80% from last month
								</p>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
