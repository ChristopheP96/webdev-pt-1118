// desestructuring
const classRoom = {
  course: 'web dev',
  students: ['zuzana', 'jorge', 'Ines'],
  teachers: {
    // lead: {
    //   // name: 'Me',
    //   address: {
    //     street: 'pamplona 96',
    //     postalCode: '08014',
    //     assistans: ['Alex C', 'Alex B', 'Manu' ],
    //   },
    // },
  }
}

// const { course = 'pepito' } = classRoom;
// const { teachers: { lead: { name = 'Yo'} = {} } } = classRoom;

// console.log(lead);


// const course = classRoom.course;
// const { course } = classRoom;

// const { assistans } = classRoom.teachers
// const { teachers: { lead: { address } }, students } = classRoom;

// console.log(address, students);

/* ----------- array desesctructuring --------- */

// const students = ['zuzana', 'jorge', 'Ines']

// const firstStudent = students[0];
// const [firstStudent, secondStudent, third] = students;

// console.log(firstStudent)

/* ------------- mix --------------*/

// const { course, students: [firstStudent] } = classRoom;

// const { 
//   teachers: { 
//     lead: { 
//       name, 
//       address: { 
//         assistans: [ , AlexB ]
//       } 
//     } 
//   } 
// } = classRoom;


// console.log(name, AlexB)

/*-------------- Spread Operators -------------------*/

// const vowels = ['a','e', 'i', 'o', 'u'];
// const consonants = ['b', [0,[0,2],2],'d'];

// const abc = [...vowels, ...consonants];

// console.log(abc);
// abc[6][1] = 'algo';
// abc[0] = 'primero';
// console.log('abc:',abc)
// console.log('consonants', consonants)
// console.log('vowels', vowels)

// const address = {
//   street: 'pamplona',
//   num: 96
// }
// const personalInfo = {
//   name: 'tu',
//   last: 'nose'
// }

// const student = {
//   ...address,
//   ...personalInfo,
//   altura: 180,
// }

// console.log(student)

// default parameters

const sayName = (name = 'anonymous') => {
  // if (name === undefined) {
  //   console.log(`hello i'm anomymous`);
  // } else {
  //   console.log(`hello i'm ${name}`);
  // }
  // name ? console.log(`hello i'm ${name}`) : console.log(`hello i'm anomymous`)
  console.log(`hello i'm ${name}`)
}

sayName('thor')
sayName()
