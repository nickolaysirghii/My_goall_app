const contianer = document.querySelector(".container");

//======================================================================//
//                               DATA                                   //
//======================================================================//

const dataArray = [
    {
        id:1,
        title: "Statistics",
        do: ()=>{
            
            contianer.innerHTML = "";
            const statisticContainer = document.createElement("div");
            const statistic_inside = document.createElement("div");
            const description = document.createElement("div");
            
            const par = document.createElement("p");
            const back = document.createElement("p");
            back.innerText = "back";
            par.innerText = "Statistics";

            back.classList.add("statisticsBackButton");
            statisticContainer.classList.add("statisticsContainer");
            statistic_inside.classList.add("statisticInside");
            description.classList.add("descritionWindow");
            
            back.addEventListener("click",dataArray[0].inner[0].do);

            const descriptionData = [
                {
                    id:1,
                    title: "Sleep",
                    color: "red",
                    counting_function: ()=>{
                        contianer.innerHTML = "";
                       
                        //============================================
                        //                   FORM                   //
                        //============================================
                        const Form = document.createElement("form");
                        const beginingInput = document.createElement("input");
                        const endInput = document.createElement("input");
                        const btnForm = document.createElement("button");
                        btnForm.innerText = "check";
                        
                        beginingInput.type = "text";
                        beginingInput.placeholder = "begining";
                        beginingInput.name = "begining";
                        endInput.type = "text";
                        endInput.placeholder = "end";
                        endInput.name = "end";
                        Form.append(beginingInput,endInput,btnForm);
                        Form.classList.add("statisticForm");
    
                        //============================================
                        //                   FORM                   //
                        //============================================
                        const back = document.createElement("div");
                        const descriptionContainer = document.createElement("div");
                        //..................................................
                        const informHours = document.createElement("p");
                        
                        informHours.innerText = `Total hours of sleap:`;
                        
                        informHours.classList.add("total_hours_par");
                        
                        //..................................................
                        back.innerText = "back";
                        back.classList.add("statisticsBackButton");
                        descriptionContainer.classList.add("description_work_container");
                        descriptionContainer.append(Form,informHours)
                        contianer.append(back,descriptionContainer);
                        back.addEventListener("click",dataArray[0].do);
    
                        
                        
    
                        const work_form_counting = (e)=>{
                            e.preventDefault();
                            let from = 0;
                            let to = 0;
                            let amount = 0;
                            dataArray[0].statisticArray.forEach(el => {
                             if(el.date === e.target.begining.value){
                                from = el.id
                             };
                             if(el.date === e.target.end.value){
                                to = el.id
                             };});
                            dataArray[0].statisticArray.forEach(el => {
                                const sleap1 = (((el.sleap[2]*60)+el.sleap[3])-((el.sleap[0]*60)+el.sleap[1]))/60;
    
                
                                
                                if(el.id >= from && el.id <= to){
                                  amount = amount + sleap1;  
                                }
                            });
                         
                            informHours.innerText = `Total hours of sleap:${amount}`;
                
                            
                            e.target.reset();
                            
                        };
                        
                        Form.addEventListener("submit",work_form_counting);
                        }
                },
                {
                    id:2,
                    title: "work",
                    color: "black",
                    counting_function: ()=>{
                        contianer.innerHTML = "";
                       
                        //============================================
                        //                   FORM                   //
                        //============================================
                        const Form = document.createElement("form");
                        const beginingInput = document.createElement("input");
                        const endInput = document.createElement("input");
                        const btnForm = document.createElement("button");
                        btnForm.innerText = "check";
                        
                        beginingInput.type = "text";
                        beginingInput.placeholder = "begining";
                        beginingInput.name = "begining";
                        endInput.type = "text";
                        endInput.placeholder = "end";
                        endInput.name = "end";
                        Form.append(beginingInput,endInput,btnForm);
                        Form.classList.add("statisticForm");
    
                        //============================================
                        //                   FORM                   //
                        //============================================
                        const back = document.createElement("div");
                        const descriptionContainer = document.createElement("div");
                        //..................................................
                        const informHours = document.createElement("p");
                        const informMoney = document.createElement("p");
                        informHours.innerText = `Total hours of work:`;
                        informMoney.innerText = "Total Money";
                        informHours.classList.add("total_hours_par");
                        informMoney.classList.add("totalMoney");
                        //..................................................
                        back.innerText = "back";
                        back.classList.add("statisticsBackButton");
                        descriptionContainer.classList.add("description_work_container");
                        descriptionContainer.append(Form,informHours,informMoney)
                        contianer.append(back,descriptionContainer);
                        back.addEventListener("click",dataArray[0].do);
    
                        
                        
    
                        const work_form_counting = (e)=>{
                            e.preventDefault();
                            let from = 0;
                            let to = 0;
                            let amount = 0;
                            dataArray[0].statisticArray.forEach(el => {
                             if(el.date === e.target.begining.value){
                                from = el.id
                             };
                             if(el.date === e.target.end.value){
                                to = el.id
                             };});
                            dataArray[0].statisticArray.forEach(el => {
                                const work_1_total = (((el.work1[2]*60)+el.work1[3])-((el.work1[0]*60)+el.work1[1]))/60;
                                const work_2_total = (((el.work2[2]*60)+el.work2[3])-((el.work2[0]*60)+el.work2[1]))/60;
                                const total  = work_1_total+work_2_total;
                                
                                if(el.id >= from && el.id <= to){
                                  amount = amount +total;  
                                }
                            });
                         
                            informHours.innerText = `Total hours of work:${amount}`;
                            informMoney.innerText = `Total money:${amount*19} pl.`
                            
                            e.target.reset();
                            
                        };
                        
                        Form.addEventListener("submit",work_form_counting);
                        }
                },
                {
                    id:3,
                    title: "learn",
                    color: "blue",
                    counting_function: ()=>{
                        console.log("learn");
                    }
                },
                {
                    id:4,
                    title: "walk",
                    color: "green",
                    counting_function: ()=>{
                        console.log("walk");
                    }
                },
                {
                    id:5,
                    title: "buy",
                    color: "yellow",
                    counting_function: ()=>{
                        console.log("buy");
                    }
                }
            ];
             
             descriptionData.forEach(el => {
                const descriptionParts = document.createElement("div");
                const par = document.createElement("p");
                const color = document.createElement("div");
                descriptionParts.classList.add("descriptionParts");
                par.classList.add("description_par");
                color.classList.add("descriotion_color");
                par.innerText = el.title;
                color.style.backgroundColor = el.color;
                color.addEventListener("click",el.counting_function)

                descriptionParts.append(par,color)

                description.append(descriptionParts);
            });


            statisticContainer.append(back,par,description, statistic_inside);
            contianer.append(statisticContainer);
            

            const position_of_sleap = ()=>{
                dataArray[0].statisticArray.forEach(el => {
              const beginingSleap = (el.sleap[0]*60)+(el.sleap[1]);
              const endSleap = (el.sleap[2]*60)+(el.sleap[3]);
              const beginingWork1 = (el.work1[0]*60)+(el.work1[1]);
              const endWork1 = (el.work1[2]*60)+(el.work1[3]);
              const beginingWork2 = (el.work2[0]*60)+(el.work2[1]);
              const endWork2 = (el.work2[2]*60)+(el.work2[3]);
              
              const sleap = document.createElement("div");
              const work1 = document.createElement("div");
              const work2 = document.createElement("div");
              sleap.style.gridColumn = `${beginingSleap}/${endSleap}`;
              work1.style.gridColumn = `${beginingWork1}/${endWork1}`;
              work2.style.gridColumn = `${beginingWork2}/${endWork2}`;
              sleap.innerText = el.date;

              sleap.classList.add("sleap");
              work1.classList.add("work1");
              work2.classList.add("work2");

              sleap.addEventListener("click",dataArray[0].inner[0].click_in_sleap)
              statistic_inside.append(work1,sleap,work2); 
            });

            };position_of_sleap();
        },
        inner: [
            {
                id:1,
                do: ()=>{
                    contianer.innerHTML = "";
                    const first_page = document.createElement("div");
                    first_page.classList.add("first_page");
                    dataArray.forEach(el=>{
                    const btn = document.createElement("div");
                    btn.innerText = el.title;
                    btn.style.gridRow = el.styles[0].row;
                    btn.style.gridColumn = el.styles[0].column;
                    btn.addEventListener("click",el.do);
                    first_page.append(btn);
                });
                contianer.append(first_page);
                },
               
            },
            
        ],
        description_form_functions: [],
        styles: [
        {
            id:1,
            title: "grid",
            row: "2/3",
            column: "3/4"
        },
        {   
        id:1,
        title:" back button color",
        color: "red"
        
        }],
        statisticArray:[
            {
                id:1,
                date: "04,06,2023",
                sleap:[07,01,13,00],
                work1: [0,1,06,0],
                work2: [21,0,24,0]
            },
            {
                id:2,
                date: "05,06,2023",
                sleap:[6,5,11,11],
                work1: [0,1,5,15],
                work2: [20,30,24,0]
            },
            {
                id:3,
                date: "06,06,2023",
                sleap:[8,15,11,55],
                work1: [0,1,7,10],
                work2: [20,30,24,0]
            },
            {
                id:4,
                date: "07,06,2023",
                sleap:[6,45,12,45],
                work1: [0,1,6,5],
                work2: [22,0,24,0]
            },
            {
                id:5,
                date: "08,06,2023",
                sleap:[6,33,13,9],
                work1: [0,1,5,30],
                work2: [0,1,0,2]
            }

        ]
    },
    {
        id:2,
        title: "Body",
        do: ()=>{ contianer.innerHTML = "";
        const stat = document.createElement("div");
        const par = document.createElement("p");
        const back = document.createElement("p");
        back.innerText = "back";
        par.innerText = "Body";
        back.addEventListener("click",dataArray[0].inner[0].do);
        stat.append(back,par);
        contianer.append(stat);},
        inner: [ {
            id:1,
            do: ()=>{
                contianer.innerHTML = "";
                const first_page = document.createElement("div");
                first_page.classList.add("first_page");
                dataArray.forEach(el=>{
                const btn = document.createElement("div");
                btn.innerText = el.title;
                btn.style.gridRow = el.styles[0].row;
                btn.style.gridColumn = el.styles[0].column;
                btn.addEventListener("click",el.do);
                first_page.append(btn);
            });
contianer.append(first_page);
            }
        }],
        styles: [{
            title: "grid",
            row: "3/4",
            column: "2/3"
        }]
    },
    {
        id:3,
        title: "Mind",
        do: ()=>{ contianer.innerHTML = "";
        const stat = document.createElement("div");
        const par = document.createElement("p");
        const back = document.createElement("p");
        back.innerText = "back";
        par.innerText = "Mind";
        back.addEventListener("click",dataArray[0].inner[0].do);
        stat.append(back,par);
        contianer.append(stat);},
        inner: [ {
            id:1,
            do: ()=>{
                contianer.innerHTML = "";
                const first_page = document.createElement("div");
                first_page.classList.add("first_page");
                dataArray.forEach(el=>{
                const btn = document.createElement("div");
                btn.innerText = el.title;
                btn.style.gridRow = el.styles[0].row;
                btn.style.gridColumn = el.styles[0].column;
                btn.addEventListener("click",el.do);
                first_page.append(btn);
            });
contianer.append(first_page);
            }
        }],
        styles: [{
            title: "grid",
            row: "3/4",
            column: "3/4"
        }]
    },
    {
        id:4,
        title: "Social",
        do: ()=>{ contianer.innerHTML = "";
        const stat = document.createElement("div");
        const par = document.createElement("p");
        const back = document.createElement("p");
        back.innerText = "back";
        par.innerText = "Social";
        back.addEventListener("click",dataArray[0].inner[0].do);
        stat.append(back,par);
        contianer.append(stat);},
        inner: [ {
            id:1,
            do: ()=>{
                contianer.innerHTML = "";
                const first_page = document.createElement("div");
                first_page.classList.add("first_page");
                dataArray.forEach(el=>{
                const btn = document.createElement("div");
                btn.innerText = el.title;
                btn.style.gridRow = el.styles[0].row;
                btn.style.gridColumn = el.styles[0].column;
                btn.addEventListener("click",el.do);
                first_page.append(btn);
            });
contianer.append(first_page);
            }
        }],
        styles: [{
            title: "grid",
            row: "3/4",
            column: "4/5"
        }]
    },
    {
        id:5,
        title: "Time/Money",
        do: ()=>{ contianer.innerHTML = "";
        const stat = document.createElement("div");
        const par = document.createElement("p");
        const back = document.createElement("p");
        back.innerText = "back";
        par.innerText = "Time/Money";
        back.addEventListener("click",dataArray[0].inner[0].do);
        stat.append(back,par);
        contianer.append(stat);},
        inner: [ {
            id:1,
            do: ()=>{
                contianer.innerHTML = "";
                const first_page = document.createElement("div");
                first_page.classList.add("first_page");
                dataArray.forEach(el=>{
                const btn = document.createElement("div");
                btn.innerText = el.title;
                btn.style.gridRow = el.styles[0].row;
                btn.style.gridColumn = el.styles[0].column;
                btn.addEventListener("click",el.do);
                first_page.append(btn);
            });
contianer.append(first_page);
            }
        }],
        styles: [{
            title: "grid",
            row: "4/5",
            column: "3/4"
        }]
    }
];
//======================================================================//
//                             END OF DATA                              //
//======================================================================//

dataArray[0].inner[0].do()