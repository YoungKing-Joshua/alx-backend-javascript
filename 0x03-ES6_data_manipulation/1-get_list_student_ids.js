export default function getListStudentIds() {
	if (Array.isArray) {
		return array.map((obj) => obj.id);
	}
	return [];
}
