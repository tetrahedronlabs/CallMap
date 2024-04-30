import { supabase } from './supabase/client';

export async function getCampuses() {
	const { data: campuses } = await supabase.from('campuses').select('*');
	return campuses;
}

export async function getCampus(campusid: string) {
	const { data: campus } = await supabase
		.from('campuses')
		.select()
		.match({ campus_id: campusid })
		.single();
	if (!campus) {
		return null;
	}
	return campus;
}
