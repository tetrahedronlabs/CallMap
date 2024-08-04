import { getDepartment } from '@/lib/department';

export default async function Campus({
	params: { departmentid },
}: {
	params: { departmentid: string };
}) {
	const department = await getDepartment(departmentid);

	if (!department) {
		return <div>Campus not found</div>;
	}

	return <div>{department.name}</div>;
}
