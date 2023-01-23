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

let blog4 = {
    title: "Responsive web design",
    likes: 3,
    dislikes: 15
};

let blog5 = {
    title: "NoSQL DB!",
    likes: 50,
    dislikes: 15
};

let blog6 = {
    title: "Event Listener",
    likes: 70,
    dislikes: 70
};

let user1 = {
    username: "Jelena",
    age: 28,
    blogs: [blog1,blog2,blog3],
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

let user2 = {
    username: "Stefan",
    age: 28,
    blogs: [blog4,blog5],
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

let user3 = {
    username: "Bojan",
    age: 17,
    blogs: [blog6],
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

// // Ispisati sve blogove korisnika user1

console.log(user1.blogs);

// Ispisati naslov prbog bloga koji je napisao koristni user

console.log(user1.blogs[0].title);

user1.logBlogs();
let users = [user1, user2, user3];

// Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach(u => {
    if(u.age < 18){
        console.log(u.username);
    };
});

// Ispisati naslove onih blogova koji imaju vise od 50 lajkova

users.forEach(u => {
    u.blogs.forEach(blog => {
        if(blog.likes > 50){
            console.log(blog.title);
        };
    });
});


// napraviti arrow funkciju kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove

let printBlogs = username => {
    users.forEach(u =>{
     if(u.username == username){
        u.logBlogs();
     }
    });
}

printBlogs("Jelena");


// // Ispisati sve blogove autora ciji je username "Stefan";

users.forEach(u => {
    if(u.username == "Stefan"){
      u.logBlogs();
    }
});


// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
users.forEach(u => {
    let l = 0;
    u.blogs.forEach(blog=> {
        l+=blog.likes;
    });
    if(l>100){
        console.log(u.username);
    }
})

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let prosecanBrLajkova = niz => {
let suma = 0;
let br = 0;
niz.forEach(user =>{
    user.blogs.forEach(blog => {
        suma += blog.likes;
        br++;
    });
});
return suma/br;
}
console.log(prosecanBrLajkova(users));

users.forEach(user => {
    user.blogs.forEach(blog=>{
        if(blog.likes > prosecanBrLajkova(users)){
            console.log(blog.title);
        }
    });
});




// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

let prosecanBrDislajkova = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(user => {
        user.blogs.forEach(blog => {
            suma+=blog.dislikes;
            br++;
        });
    });
    return suma/br;
}

users.forEach( user =>{
    user.blogs.forEach( blog =>{
        if(blog.likes > prosecanBrLajkova(users) && blog.dislikes < prosecanBrDislajkova(users)){
            console.log(blog.title);
        }
    })
})



