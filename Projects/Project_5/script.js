let users = [
    {
        user: "Ashutosh",
        age: 23,
        occupation: "Software Developer",
        img: "https://randomuser.me/api/portraits/men/11.jpg",
        description: "Passionate coder lding cool apps."
    },
    {
        user: "Ananya",
        age: 21,
        occupation: "Student",
        img: "https://randomuser.me/api/portraits/women/12.jpg",
        description: "Curious learner explorintive -solving daily."
    },
    {
        user: "Rahul",
        age: 28,
        occupation: "Data Analyst",
        img: "https://randomuser.me/api/portraits/men/13.jpg",
        description: "Enjoys turning complex datr smarter decisions."
    },
    {
        user: "Priya",
        age: 25,
        occupation: "Graphic Designer",
        img: "https://randomuser.me/api/portraits/women/14.jpg",
        description: "Creative designer passionat, and modern minimal aesthetics."
    },
    {
        user: "Karan",
        age: 30,
        occupation: "Doctor",
        img: "https://randomuser.me/api/portraits/men/15.jpg",
        description: "Dedicated healthcare pritted to patient care and medical innovation."
    },
    {
        user: "Neha",
        age: 27,
        occupation: "Teacher",
        img: "https://randomuser.me/api/portraits/women/16.jpg",
        description: "Inspiring teacher helpingpassion."
    },
    {
        user: "Aman",
        age: 24,
        occupation: "Digital Marketer",
        img: "https://randomuser.me/api/portraits/men/17.jpg",
        description: "Focused on online branding, SEO"
    },
    {
        user: "Simran",
        age: 22,
        occupation: "Content Writer",
        img: "https://randomuser.me/api/portraits/women/18.jpg",
        description: "Writes engaginconnect audiences with brands."
    },
    {
        user: "Rohit",
        age: 26,
        occupation: "Engineer",
        img: "https://randomuser.me/api/portraits/men/19.jpg",
        description: "ng structures and innovative systems."
    },
    {
        user: "Megha",
        age: 29,
        occupation: "Entrepreneur",
        img: "https://randomuser.me/api/portraits/women/20.jpg",
        description: "Driven entrepreneund empowering young professionals."
    }
];

let card = ' '
users.forEach((elem, id) => {
    console.log(elem.user, id);
    card += `    <div class="card">
        <img src=${elem.img} alt="">

        <div class="data">



            <div class="info">
                <h1>${elem.user}</h1>
                <h2>${elem.age}</h2>


            </div>
            <div class="info">
                <p> <b>${elem.occupation}</b>
                </p>
                <button id=${id}><b>Add</b></button>

            </div>


        </div>
    </div>`

})

document.querySelector("body").innerHTML = card

document.querySelector('button').addEventListener('click', function (dets) {
    console.log(elem.dets);

})