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

                descriptionParts.append(par,color)

                description.append(descriptionParts);
            });


            
            statisticContainer.append(back,par,description, statistic_inside);
            contianer.append(statisticContainer);
            

            const position_of_sleap = ()=>{
                dataArray[0].statisticArray.forEach(el => {
              const beginingSleap = (el.sleap[0]*60)+(el.sleap[1]);
              const endSleap = (el.sleap[2]*60)+(el.sleap[3]);
              const beginingWork = (el.work[0]*60)+(el.work[1]);
              const endWork = (el.work[2]*60)+(el.work[3]);
              const sleap = document.createElement("div");
              const work = document.createElement("div");
              sleap.style.gridColumn = `${beginingSleap}/${endSleap}`;
              work.style.gridColumn = `${beginingWork}/${endWork}`;
              sleap.innerText = el.date;

              sleap.classList.add("sleap");
              work.classList.add("work");
              sleap.addEventListener("click",dataArray[0].inner[0].click_in_sleap)
              statistic_inside.append(sleap,work); 
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
                work: [21,0,24,0]
            },
            {
                id:1,
                date: "05,06,2023",
                sleap:[6,01,13,0],
                work: [20,0,24,0]
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