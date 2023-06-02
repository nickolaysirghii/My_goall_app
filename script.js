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
            const stat = document.createElement("div");
            const par = document.createElement("p");
            const back = document.createElement("p");
            back.innerText = "back";
            par.innerText = "Statistics";
            back.addEventListener("click",dataArray[0].inner[0].do);
            stat.append(back,par);
            contianer.append(stat);
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
        styles: [{
            title: "grid",
            row: "2/3",
            column: "3/4"
        }]
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