/*gpa calculation
*/
function gpa(marks){ 
    let gpa;


    if(marks>=0 && marks<32){
         gpa=0;
    }else if (marks>=33 && marks<40){
        gpa=1;
    }else if(marks>40 && marks<50){
        gpa=2;
    }else if(marks>=50 && marks<60){
        gpa=3;
    }else if(marks>=60 && marks<70){
        gpa=3.5;
    }else if (marks>=70 && marks<80){
        gpa=4;
    }else if(marks>=80 && marks<=100){
        gpa=5;
    }    
    return gpa;
    }
    
    /*grade calculation
    */
    function grade(marks){
    let grade;
    if(marks>=0 && marks<=32){
        grade='F';
    }else if (marks>=33 && marks<=40){
        grade='D';
    }else if (marks>=33 && marks<=40){
        grade='C';
    }else if (marks>=33 && marks<=40){
        grade='B';
    }else if (marks>=33 && marks<=40){
        grade='A-';
    }else if (marks>=33 && marks<=40){
        grade='A';
    }else if (marks>=33 && marks<=40){
        grade='A+';
    }
    return grade;
    }
    
    
    /*cgpa calculation
    */
    let cgpa =(b,e,m,s,ss,r)=>{
        let total_gpa=(b+e+m+s+ss+r);
     let cgpa=total_gpa/6;
    
        if (b==0 || e==0 || m==0 || s==0 || ss==0 || r==0){
    
            return'good job';
        }else{
            return ` your cgpa = ${cgpa} & Grade = ${totalGrade(cgpa)}`;
        }
    }

    
    /*total grade
    */
    
    function totalgrade(cgpa){
        if (cgpa>=0 && cgpa<1){
            return 'F';
        }else if (cgpa>=1 && cgpa<2){
            return 'D';
        }if (cgpa>=2 && cgpa <3){
            return 'C';
        }if (cgpa >=3 && cgpa<4){
            return 'A-'
        }if (cgpa >=4 && cgpa<5){
            return 'A';
        }if (cgpa==5){
            return'A+';
        }

        return totalgrade;
    }