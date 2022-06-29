let year = '2020';
let semester = 'Fall';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	'FYEARB': new School('B', '1-year', []),
	'SECYEARCS': new School('C', '2-Year', []),
	'THIRDCPS': new School('CS', '3-Year', []),
	'FTEHSS': new School('H', '4-year', []),
	'MOUMTSMS': new School('M', 'Mtech 1-year', []),
	'SEMTPS': new School('P', 'Mtech 2-year', []),
};

let courses = {

	/* 1 YEAR */
	'B201': new Course('Microbiology', 'μBio (F2)', 'B'),
	'B202': new Course('ACTIVITY', 'ACTIVITY', 'E'),
	'B203': new Course('Biochemistry Lab', 'Biochem. lab (F2)', 'G'),
	'B301': new Course('Physiology I (Animal)', 'APhys (F1)', 'A'),
	'B302': new Course('SPORT', 'SPORT', 'D'),
	'B303': new Course('Ecology', 'Eco (F3)', 'C'),
	'B354': new Course('Microbiology Lab', 'Micro-Lab (F1)', 'F'),
	'B355': new Course('Java', 'Java (F3)', 'H'),
	'B357': new Course('Java lab', 'JavLAB (Veda mam)', 'K'),
	'B356': new Course('PHP', 'PHP (F1)', 'I'),
	'B360': new Course('Php lab', 'php LAB (Shreshtha mam )', 'L'),
	'B358': new Course('Kotelin', 'Kotelin (F2)', 'J'),
	'B359': new Course('ACTIVITY', 'PROG. PRA', 'M'),
	

	/* 2 YEAR */
	'C201': new Course('Theory of Computation', 'ThComp (F4)', 'A'),
	'C207': new Course('Design and Analysis of Algorithms Lab', 'DAA (Komal mam)', 'G'),
	'C203': new Course('Design and Analysis of Algorithms', 'Algo (F6)', 'C'),
	'C301': new Course('SPORT', 'SPORT', 'D'),
	'C302': new Course('Discrete Learning', 'Disc. (F5)', 'B'),
	'C307': new Course('ACTIVITY', 'ACTI', 'E'),
	'C401': new Course('Theory of Computation Lab', 'Computa. lab (Gaurav sir)', 'F'),
	'C402': new Course('Java', 'Java (F6)', 'H'),
	'C403': new Course('PHP', 'PHP (F5)', 'I'),
	'C404': new Course('Kotelin', 'Kotelin (F4)', 'J'),
	'C405': new Course('Java lab', 'Java LAB(Vedanshi mam)', 'K'),
	'C406': new Course('Php lab', 'php LAB(Shreshtha mam )', 'L'),
	'C407': new Course('ACTIVITY', 'ACTI.', 'M'),

	/* 3 YEAR */
	'CS201': new Course('Theory of Computation', 'ThComp (F7)', 'A'),
	'CS301': new Course('Design and Analysis of Algorithms', 'Algo (F9)', 'C'),
	'CS454': new Course('SPORT', 'SPORT', 'D'),
	'CS460': new Course('Design and Analysis of Algorithms Lab', 'DAA LAB(F8)', 'G'),
	'CS461': new Course('Discrete Learning', 'Disc. (F8)', 'B'),
	'CS462': new Course('ACTIVITY', 'Pyth. (Kamley mam)', 'E'),
	'CS463': new Course('Theory of Computation Lab', 'Computa. lab (F7)', 'F'),
	'CS465': new Course('Java', 'Java (F9)', 'H'),
	'CS466': new Course('PHP', 'PHP (F7)', 'I'),
	'CS467': new Course('Kotelin', 'Kotelin (F8)', 'J'),
	'CS468': new Course('Java lab', 'Java LAB(F8)', 'K'),
	'CS469': new Course('Php lab', 'php LAB(F9)', 'L'),
	'CS470': new Course('ACTIVITY', 'ACTI.', 'M'),


	

	/* 4 YEAR */
	'H209': new Course('Speculative Fiction', 'SpecFic (F10)', 'A'),
	'H225': new Course('Introduction to Psychology', 'Psych (F12)', 'C'),
	'H235': new Course('Speculative Fiction lab', 'SF lab (F10)', 'F'),
	'H238': new Course('Introduction to Psychology Lab', 'Psycho. lab(F11)', 'G'),
	'H239': new Course('Java', 'Java (F12)', 'H'),
	'H240': new Course('PHP', 'PHP (F10)', 'I'),
	'H241': new Course('Kotelin', 'Kotelin (F11)', 'J'),
	'H242': new Course('Java lab', 'Java LAB(F10)', 'K'),
	'H243': new Course('Php lab', 'php LAB(F11)', 'L'),
	'H244': new Course('ACTIVITY', 'ACTI.', 'M'),
	'H245': new Course('EVS', 'EV(F11)', 'B'),
	'H246': new Course('SPORT', 'SPORT', 'D'),
	'H247': new Course('PLACEMENT PRACTICE', 'PLACE', 'E'),


	/* 4 YEAR */
	'M201': new Course('Real Analysis', 'RAnal (Aman sir)', 'C'),
	'M202': new Course('Group Theory', 'Groups (Sapna Mam)', 'E'),
	'M203': new Course('Discrete Mathematics', 'Discrete (Komal mam)', 'B'),
	'M207': new Course('Number Theory', 'Number (Ankit sir)', 'A'),
	'M302': new Course('Rings and Modules', 'Modules (Pankaj sir)', 'D'),
	'M303': new Course('Discrete Mathematics lab', 'Discre. lab (Kamley mam)', 'G'),
	'M304': new Course('Number Theory Lab', 'NT Lab (Gaurav sir)', 'F'),
	'M305': new Course('Java', 'Java (Shreya mam sir)', 'H'),
	'M306': new Course('PHP', 'PHP (Gaurav sir)', 'I'),
	'M307': new Course('Kotelin', 'Kotelin (Abhishek sir)', 'J'),
	'M308': new Course('Java lab', 'Java LAB(Vedanshi mam)', 'K'),
	'M309': new Course('Php lab', 'php LAB(Shreshtha mam )', 'L'),
	'M310': new Course('ACTIVITY', 'ACTI.', 'M'),

	

	/* MTECH*/
	'P201': new Course('Statistical Mechanics Lab', 'Mechani. Lab (Aman sir)', 'F'),
	'P202': new Course('Electronics Lab', 'Elec. lab (Sapna Mam)', 'G'),
	'P207': new Course('Linear Optics', 'LinOpt (Komal mam)', 'C'),
	'P203': new Course('Electronics', 'Elec (Ankit sir)', 'B'),
	'P302': new Course('Statistical Mechanics', 'StatMech (Pankaj sir)', 'A'),
	'P303': new Course('Quantum Mechanics II', 'QM II (Kamley mam)', 'D'),
	'P304': new Course('Special Theory of Relativity', 'STR (Gaurav sir)', 'E'),
	'P305': new Course('Java', 'Java (Shreya mam sir)', 'H'),
	'P306': new Course('PHP', 'PHP (Gaurav sir)', 'I'),
	'P307': new Course('Kotelin', 'Kotelin (Abhishek sir)', 'J'),
	'P308': new Course('Java lab', 'Java LAB(Vedanshi mam)', 'K'),
	'P309': new Course('Php lab', 'php LAB(Shreshtha mam )', 'L'),
	'P310': new Course('ACTIVITY', 'ACTI.', 'M'),
	
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}
