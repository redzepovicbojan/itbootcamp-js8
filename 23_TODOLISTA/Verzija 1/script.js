let liTasks = document.querySelectorAll("li");
let 
liTasks.forEach(li => {
    li.addEventListener( "click", () => {
        // 1. nacin
        // if(li.style.textDecoration == "line-through"){
        //     li.style.textDecoration = "none";
        // } else {
        //     li.style.textDecoration = "line-through";
        // }

        // 2. nacin
        li.classList.toggle("precrtaj");
    });
});