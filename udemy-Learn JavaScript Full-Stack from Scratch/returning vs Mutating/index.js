// returning vs mutating

        let students = [
            { name:"Robin", qualification: "B.Tech", percentage:"64"},
            { name:"Roshan", qualification: "BCA", percentage:"61"},
            { name:"Rakesh", qualification: "MCA", percentage:"69"},
            { name:"Mohan",qualification:'BCA',percentage:"61"},
            { name:"Ranjit",qualification:'MCA',percentage:"62"},
            { name:"Emen",qualification:'MCA',percentage:"68"}
        ];
        // console.log(students);

        // console.log(students.push({name:"Rohan",qualification:'M.Tech',percentage:"72"}));
        students.push({name:"Rohan",qualification:'M.Tech',percentage:"72"});
//forEach function
   
        // students.foreach(y);
        // function y(x){
        //     console.log(`Name : ${x.name} have secured ${x.percentage} in ${x.qualification}`);
        // }
        // console.log(students);

//map function

        let nameDisplay = students.map(nameOnly);

        function nameOnly(person){
            return person.name;
        }

        // console.log(nameDisplay);

//filter function
        let jobs = students.filter(criteriaQualification);

        function criteriaQualification(candidate){
            return candidate.qualification=="MCA";
        }
        // console.log(jobs);

        function criteriaPercentage(candidate){
            return candidate.percentage > 65;
        }

        let candidateDisplay = students.filter(criteriaQualification).filter(criteriaPercentage);
        console.log( candidateDisplay );
        
// map & filter function

        let candidateNameDisplay =
         students.filter(criteriaQualification)
                 .filter(criteriaPercentage)
                 .map(nameOnly);
        console.log( candidateNameDisplay );

                




