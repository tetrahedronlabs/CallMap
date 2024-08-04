import { supabase } from './supabase/client';

export async function getDepartments() {
	const { data: departments } = await supabase.from('departments').select('*');
	return departments;
}

export async function getDepartment(departmentslug: string) {
	const { data: department } = await supabase
		.from('departments')
		.select()
		.match({ slug: departmentslug })
		.single();
	if (!department) {
		return null;
	}
	return department;
}
