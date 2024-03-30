export default function getListStudentIds(array) {
	if (Array.isArray) {
		return array.map((obj) => obj.id);
	}
	return [];
}
