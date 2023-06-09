const contianer = document.querySelector(".container");

//======================================================================//
//                               DATA                                   //
//======================================================================//

const dataArray = [
    {
        id:1,
        title: "Statistics",
        do: ()=>{
//..........................................................................            
            contianer.innerHTML = "";

            const statisticContainer =        document.createElement("div");
            const statistic_inside =          document.createElement("div");
            const description =               document.createElement("div");
            const back =                      document.createElement("p");
            back.innerText = "back";

            back.classList.add("statisticsBackButton");
            statisticContainer.classList.add("statisticsContainer");
            statistic_inside.classList.add("statisticInside");
            description.classList.add("descritionWindow");
            
            back.addEventListener("click",dataArray[0].inner[0].do);
//..........................................................................
            dataArray[0].descriptions_data.forEach(el => {
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
//..........................................................................
            const position_of_proceses = ()=>{
                dataArray[0].statisticArray.forEach(el => {
              const beginingSleap = (el.sleap[0]*60)+(el.sleap[1]);
              const endSleap = (el.sleap[2]*60)+(el.sleap[3]);
              const beginingSleap2 = (el.sleap2[0]*60)+(el.sleap2[1]);
              const endSleap2 = (el.sleap2[2]*60)+(el.sleap2[3]);
              const beginingWork1 = (el.work1[0]*60)+(el.work1[1]);
              const endWork1 = (el.work1[2]*60)+(el.work1[3]);
              const beginingWork2 = (el.work2[0]*60)+(el.work2[1]);
              const endWork2 = (el.work2[2]*60)+(el.work2[3]);

              if((beginingSleap+endSleap)>0){
                const sleap = document.createElement("div");
                sleap.style.gridColumn = `${beginingSleap}/${endSleap}`;
                sleap.style.gridRow = `${el.id}/${el.id+1}`;
                sleap.classList.add("sleap");
                statistic_inside.append(sleap);
              };
              if((beginingSleap2+endSleap2)>0){
                const sleap2 = document.createElement("div");
                sleap2.style.gridColumn = `${beginingSleap2}/${endSleap2}`;
                sleap2.style.gridRow = `${el.id}/${el.id+1}`;
                sleap2.classList.add("sleap");
                statistic_inside.append(sleap2);
              };
              if((beginingWork1+endWork1)>0){
               const work1 = document.createElement("div");
               work1.style.gridColumn = `${beginingWork1}/${endWork1}`;
               work1.style.gridRow = `${el.id}/${el.id+1}`;
               work1.classList.add("work1");
               statistic_inside.append(work1);
              };
              if((beginingWork2+endWork2)>0){
              const work2 = document.createElement("div");
              work2.style.gridColumn = `${beginingWork2}/${endWork2}`;
              work2.style.gridRow = `${el.id}/${el.id+1}`;
              work2.classList.add("work2");
              statistic_inside.append(work2);
              };
             });};position_of_proceses();
//..........................................................................             
            statisticContainer.append(back,description, statistic_inside);
            contianer.append(statisticContainer);
//..........................................................................            
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
        descriptions_data: [
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
                        
                        beginingInput.type = "date";
                        beginingInput.name = "begining";
                        endInput.type = "date";
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
                                const sleap2 = (((el.sleap2[2]*60)+el.sleap2[3])-((el.sleap2[0]*60)+el.sleap2[1]))/60;
                                const total = sleap1+sleap2;
                                if(el.id >= from && el.id <= to){
                                  amount = amount + total;
                                }
                            });
                            const shorted = Math.floor(amount*100)/100;
                            informHours.innerHTML = `Total hours of sleap: <span class="red">${shorted}</span>`;
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
                        
                        beginingInput.type = "date";
                        beginingInput.name = "begining";
                        endInput.type = "date";
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
                        const infoRent = document.createElement("p");
                        informHours.innerText = `Total hours of work:`;
                        informMoney.innerText = "Total Money:";
                        infoRent.innerText = "Rent period:"
                        informHours.classList.add("total_hours_par");
                        informMoney.classList.add("totalMoney");
                        infoRent.classList.add("infoRent");
                        //..................................................
                        back.innerText = "back";
                        back.classList.add("statisticsBackButton");
                        descriptionContainer.classList.add("description_work_container");
                        descriptionContainer.append(Form,informHours,informMoney,infoRent)
                        contianer.append(back,descriptionContainer);
                        back.addEventListener("click",dataArray[0].do);
    
                        
                        
    
                        const work_form_counting = (e)=>{
                            e.preventDefault();
                            let from = 0;
                            let to = 0;
                            let amount = 0;
                            let rent = 0;
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
                                  rent = rent+1;
                                }
                            });

                            const shorted = Math.floor(amount*100)/100;
                            const shorted_1 = shorted*19;
                            const shortedmoney = Math.floor(shorted_1*100)/100;
                            const shortedRent = Math.floor((rent*13.4)*100)/100;
                         
                            informHours.innerHTML = `Total hours of work: <span class="red">${shorted}</span>`;
                            informMoney.innerHTML = `Total money: <span class="red">${shortedmoney}</span> pl.`;
                            infoRent.innerHTML = `Rent period: <span class="red">${shortedRent}</span>`;

                            
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
                        contianer.innerHTML = "";
                       
                        //============================================
                        //                   FORM                   //
                        //============================================
                        const Form = document.createElement("form");
                        const beginingInput = document.createElement("input");
                        const endInput = document.createElement("input");
                        const btnForm = document.createElement("button");
                        btnForm.innerText = "check";
                        
                        beginingInput.type = "date";
                        beginingInput.name = "begining";
                        endInput.type = "date";
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
                        
                        informHours.innerText = `Total free hours:`;
                        
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
                                const sleap2 = (((el.sleap2[2]*60)+el.sleap2[3])-((el.sleap2[0]*60)+el.sleap2[1]))/60;
                                const work1 = (((el.work1[2]*60)+el.work1[3])-((el.work1[0]*60)+el.work1[1]))/60;
                                const work2 = (((el.work2[2]*60)+el.work2[3])-((el.work2[0]*60)+el.work2[1]))/60;
                                const total = 24-(sleap1+sleap2+work1+work2);
                                if(el.id >= from && el.id <= to){
                                  amount = amount + total;
                                }
                            });
                            const shorted = Math.floor(amount*100)/100;
                            informHours.innerHTML = `Total free hours: <span class="red">${shorted}</span>`;
                            e.target.reset();
                            
                        };
                        Form.addEventListener("submit",work_form_counting);
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
            ],
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
                date: "2023-06-04",
                sleap: [7,1,13,0],
                sleap2:[0,0,0,0],
                work1: [0,1,6,0],
                work2: [21,0,24,0]
            },
            {
                id:2,
                date: "2023-06-05",
                sleap:[6,5,11,11],
                sleap2:[0,0,0,0],
                work1: [0,1,5,15],
                work2: [20,30,24,0]
            },
            {
                id:3,
                date: "2023-06-06",
                sleap:[8,15,11,55],
                sleap2:[0,0,0,0],
                work1: [0,1,7,10],
                work2: [20,30,24,0]
            },
            {
                id:4,
                date: "2023-06-07",
                sleap:[6,45,12,45],
                sleap2:[0,0,0,0],
                work1: [0,1,6,5],
                work2: [22,0,24,0]
            },
            {
                id:5,
                date: "2023-06-08",
                sleap:[6,33,13,9],
                sleap2:[0,0,0,0],
                work1: [0,1,5,30],
                work2: [0,0,0,0]
            },
            {
                id:6,
                date: "2023-06-09",
                sleap:[0,50,6,30],
                sleap2:[9,11,12,3],
                work1: [0,0,0,0],
                work2: [22,0,24,0]
            },

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
        const box = document.createElement("div");
        const back = document.createElement("p");
        back.innerText = "back";
        back.classList.add("statisticsBackButton");
        box.classList.add("money_container");
        back.addEventListener("click",dataArray[0].inner[0].do);
        contianer.append(back,box);
        //==================================================================//
        //                             form                                 //
        //==================================================================//
        const form = document.createElement("form");
        const first_input = document.createElement("input");
        const second_input = document.createElement("input");
        const btn = document.createElement("button");
        form.classList.add("moneyForm");
        btn.innerText = "set";
        first_input.type = "date";
        first_input.name = "firstInput";
        second_input.type = "date";
        second_input.name = "secondInput";
        form.append(first_input,second_input,btn);
        contianer.append(form);
        //==================================================================//
        //                          form  end                               //
        //==================================================================//

        const state = document.createElement("p");
        state.innerText = "State:";
        box.append(state);
    
    
    
    
    
    
    
    
    
    
    },
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
        }],
        MoneyStatistic: [
            {
                id:1,
                date: "2023-06-09",
                workIncome: 0,
                investIncome: 0,
                rendomIncome: 2,
                outcome_1_level: 0,
                outcome_2_level: 0,
                outcome_3_level: 0,
                outcome_charity: 0
            },
            {
                id:2,
                date: "2023-06-10",
                workIncome: 0,
                investIncome: 0,
                rendomIncome: 0,
                outcome_1_level: 0,
                outcome_2_level: 0,
                outcome_3_level: 0,
                outcome_charity: 0
            },
            {
                id:3,
                date: "2023-06-11",
                workIncome: 0,
                investIncome: 0,
                rendomIncome: 0,
                outcome_1_level: 0,
                outcome_2_level: 0,
                outcome_3_level: 0,
                outcome_charity: 0
            }
        ]
    }
];
//======================================================================//
//                             END OF DATA                              //
//======================================================================//

dataArray[0].inner[0].do();