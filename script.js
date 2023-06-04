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
             
            for(let i = 0 ; i<5 ; i++){
                const descriptionParts = document.createElement("div");
                descriptionParts.classList.add("descriptionParts");
                description.append(descriptionParts);
            }


            
            statisticContainer.append(back,par,description, statistic_inside);
            contianer.append(statisticContainer);
            

            const position_of_element = ()=>{
                dataArray[0].statisticArray.forEach(el => {
              console.log(el.sleap)
              const begining = (el.sleap[0]*60)+(el.sleap[1]);
              const end = (el.sleap[2]*60)+(el.sleap[3]);
              const leap = document.createElement("div");
              leap.style.gridColumn = `${begining}/${end}`;
              leap.classList.add("sleap");
              statistic_inside.append(leap)
            });

            };position_of_element()



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
                date:"04,06,2023",
                sleap: [00,45,23,20]
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