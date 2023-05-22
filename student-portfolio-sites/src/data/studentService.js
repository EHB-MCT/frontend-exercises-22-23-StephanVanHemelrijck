export async function getStudents() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await resp.json();

    let students = localStorage.getItem('students');
    if (students) {
        students = JSON.parse(students);
        data = data.concat(students);
    }
    return data;
}

export async function getStudent(id) {
    let students = await getStudents();
    // eslint-disable-next-line eqeqeq
    let student = students.find((student) => student.id == id);
    return student;
}

export async function createStudent(name, email) {
    let student = { id: Math.floor(Math.random() * 1000), name, email };
    let students = localStorage.getItem('students');

    if (students) students = JSON.parse(students);
    else students = [];

    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    return student;
}
