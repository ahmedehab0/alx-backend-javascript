import getStudentsByLocation from './2-get_students_by_loc.js'

export default function updateStudentGradeByCity(students, city, newGrades) {
	return getStudentsByLocation(students, city).map((student) => {
		for (const gradeInfo of newGrades) {
			if (student.id === gradeInfo.studentId) {
         	 		student.grade = gradeInfo.grade;
			}
		}	
		if (student.grade === undefined) {
			student.grade = 'N/A';
		}
		
		return student;
	});
}
