console.log("Nizovi objekata");

let blog1 = {
    title: "HTML!",
    likes: 30,
    dislikes: 5
};

let blog2 = {
    title: "CSS!",
    likes: 20,
    dislikes: 15
};

let blog3 = {
    title: "Java Script",
    likes: 70,
    dislikes: 7
};

let blogs = [blog1, blog2, blog3];

// Ispis niza objekata
console.log(blogs);

// Ispis jednog objketa iz niza
console.log(blogs[2]);

// Ispis propertija
console.log(blogs[2].title);

// Ispis naslova bloga u konzoli
blogs.forEach(blog => {
    console.log(blog.title);
});

// Ispis naslova blogova na stranici
for(let i=0; i<blogs.length; i++){
    document.body.innerHTML += `<h3>${blogs[i].title}</h3>`;
    document.body.innerHTML += `<p>likes: ${blogs[i].likes}</p>`;
    document.body.innerHTML += `<p>dislikes: ${blogs[i].dislikes}</p>`;
}   


// Napraviti arrow funkciju kojoj se prosleđuje niz objkeata, a ona vraća broj lajkova

let sumLikes = arrObj => {
    let sum = 0;
    arrObj.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}
console.log(sumLikes(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz objkeata, a ona vraća porsecan broj lajkova

let avegLikes = blogs => {
    return sumLikes(blogs) / blogs.length;
}

console.log(`Prosečan broj lajkova je: ${avegLikes(blogs)}`);


// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let moreLikes = blogs => {
    blogs.forEach( obj => {
        if(obj.likes > obj.dislikes){
            console.log(obj.title);
        }
    });
}
moreLikes(blogs);

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let doubleMoreLikes = blogs => {
    blogs.forEach( obj => {
        if(obj.likes/2 >= obj.dislikes){
            console.log(obj.title);
        };
    });
}
doubleMoreLikes(blogs);

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzvicnikNaKraju = blogs => {
    blogs.forEach( obj => {
        let c = obj.title.length;
        if(obj.title.charAt(c-1) == "!"){
            console.log(obj.title);
        };
    });
}
uzvicnikNaKraju(blogs);


///////////////////////////////
