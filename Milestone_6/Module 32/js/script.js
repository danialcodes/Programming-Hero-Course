const student = {
    id: "20101534",
    semester: '5th Semester',
    semesterType: {
        'Online': true,
        "Ofline": false
    },
    courses: [
        {
    'courseCode': "MAT120",
        'FullName': 'Integration',
            'credit': 3,
    }
]
};

console.log(student);

const strin = JSON.stringify(student);
console.log(strin);

const {Online,Ofline} = student.semesterType;
console.log(Online,Ofline);