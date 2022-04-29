let name=prompt('Student Name');
let roll=prompt('Roll');

let b=Number(prompt('Bangla'));
let e=Number(prompt('English'));
let m=Number(prompt('Math'));
let s=Number(prompt('Science'));
let ss=Number(prompt('Social Science'));
let r=Number(prompt('Religion'));

console.log(`
              Student Name:${name}
              Student Roll:${roll}

              Subject          Marks          GPA               Grade
              Bangla           ${b}        ${gpa (b)}         ${grade(b)}
              English          ${e}        ${gpa(e)}         ${grade(e)}
              Math             ${m}        ${gpa(m)}         ${grade(m)}
              Science          ${s}        ${gpa(s)}         ${grade(s)}
              Social Science   ${ss}       ${gpa(ss)}        ${grade(ss)}
              Religion         ${r}        ${gpa(r)}         ${grade(r)}
______________________________________________________________________________
cgpa=${cgpa(gpa(b),gpa(e),gpa(m),gpa(s),gpa(ss),gpa(r))}


`);