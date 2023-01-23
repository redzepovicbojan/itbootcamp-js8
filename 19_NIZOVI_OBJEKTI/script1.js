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

let blog4= {
    title: "Responisve web design",
    likes: 3,
    dislikes: 15
};

let blog5 = {
    title: "NoSQL DB!",
    likes: 200,
    dislikes: 15
};

let blog6 = {
    title: "Event Listener",
    likes: 700,
    dislikes: 70
};

let user = {
    username: "Jelena", 
    age: 28,
    blogs: [blog1, blog2, blog3],
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

let user1 = {
    username: "Stefan",
    age: 13,
    blogs: [blog4,blog5],
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

let user2 = {
    username: "JohnDoe",
    age: 36,
    blogs: [blog6],
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

// Ispisati sve blogove korisnika user

console.log(user.blogs);

// Ispisati naslov prbog bloga koji je napisao koristni user

console.log(user.blogs[0].title);

user.logBlogs();
let users = [user, user1, user2];

// ispisati imena onih autora koji imaju ispod 18 godina.

users.forEach(u => {
    if(u.age < 18){
        console.log(u.username);
    }
});


// Ispisati naslove onih blogova koji imaju vise od 50 lajkova
users.forEach(user => {
    user.blogs.forEach(blog =>{
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    });
});

// Ispisati sve blogove autora ciji je username "JohnDoe";
users.forEach(user => {
    if(user.username == "JohnDoe"){
        user.logBlogs();
    }
})


// napraviti arrow funkciju kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove

let printBlogs = username => {
    users.forEach(user => {
        if(users.username == username) {
            user.logBlogs();
        }
    });
}
printBlogs(user1);

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
let viseOdSto = niz =>{
    niz.forEach( user => {
        let l=0;
        user.blogs.forEach( blog =>{
            l+=blog.likes;
        });
        if(l>100){
            console.log(user.username);
        }
    });
}
viseOdSto(users);

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let prosecanBrLajkova = users => {
    let sum=0;
    let brBlogova = 0;
    users.forEach( user =>{
        user.blogs.forEach( blog =>{
            sum+=blog.likes;
            brBlogova++;
        });
    });
    return sum/brBlogova;
}

console.log(`Prosečan broj lajkova je ${prosecanBrLajkova(users)}`);

let natprosecanBrLajkova = users => {
    users.forEach( user => {
        user.blogs.forEach( blog =>{
            if(blog.likes>prosecanBrLajkova(users)){
                console.log(blog.title);
            }
        });
    });
}
natprosecanBrLajkova(users);

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena


let prosecanBrDislajkova = users => {
    let sum=0;
    let brBlogova = 0;
    users.forEach( user =>{
        user.blogs.forEach( blog =>{
            sum+=blog.dislikes;
            brBlogova++;
        });
    });
    return prosek = sum/brBlogova;
}
console.log(`Prosečan broj dislajkova je ${prosecanBrDislajkova(users)}`);



