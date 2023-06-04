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
                    color: "red"
                },
                {
                    id:2,
                    title: "work",
                    color: "black"
                },
                {
                    id:3,
                    title: "learn",
                    color: "blue"
                },
                {
                    id:4,
                    title: "walk",
                    color: "green"
                },
                {
                    id:5,
                    title: "buy",
                    color: "yellow"
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
                color.addEventListener("click",dataArray[0].inner[0].click_on_work_description)

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
              work1.innerText = "work1";
              work2.innerText = "work2";

              sleap.classList.add("sleap");
              work1.classList.add("work1");
              work2.classList.add("work2");

              sleap.addEventListener("click",dataArray[0].inner[0].click_in_sleap)
              statistic_inside.append(sleap,work1,work2); 
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
                click_in_sleap: ()=>{
                    console.log("sleap")
                },
                click_on_work_description: ()=>{
                    contianer.innerHTML = "";
                    const back = document.createElement("div");
                    const par = document.createElement("p");
                    const descriptionContainer = document.createElement("div");
                    const informHours = document.createElement("p");
                    back.innerText = "back";
                    par.innerText = "work information";
                    back.classList.add("statisticsBackButton");
                    descriptionContainer.classList.add("description_work_container");
                    descriptionContainer.append(informHours)
                    contianer.append(back,par,descriptionContainer);
                    back.addEventListener("click",dataArray[0].do);


                    let hours_of_work = 0;
                    dataArray[0].statisticArray.forEach(el => {
                        const begins1 = (el.work1[0]*60)+(el.work1[1]);
                        const ends1 = (el.work1[2]*60)+(el.work1[3]);

                        const begins2 = (el.work2[0]*60)+(el.work2[1]);
                        const ends2 = (el.work2[2]*60)+(el.work2[3]);


                        const hours1 = (ends1 - begins1)/60;
                        const hours2 = (ends2 - begins2)/60;
                        const total = hours1 + hours2;
                        hours_of_work = hours_of_work + total;
                    })
                  
                    
                    informHours.innerText = `Total hours of work: ${hours_of_work}`;


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
                date: "04,06,2023",
                sleap:[0,01,6,0],
                work1: [21,0,24,0],
                work2: [0,1,6,0]
            },
            {
                id:1,
                date: "05,06,2023",
                sleap:[6,01,13,0],
                work1: [20,0,24,0],
                work2: [0,1,6,0]
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