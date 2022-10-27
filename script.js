const form = document.querySelector('form');
const uname = document.getElementById('name');
const website = document.getElementById('website');
const email = document.getElementById('email');
const cards = document.querySelector('.cards');
const enrollBtn = document.querySelector('.enroll-btn');
const image = document.getElementById('image');
const male = document.getElementById('male');
const female = document.getElementById('female');
const ReactJs  = document.getElementById('skill1');
const Html = document.getElementById('skill2');
const CSS = document.getElementById('skill3');
const Javascript = document.getElementById('skill4');
var img;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkboxes.forEach((ele) => {
        values.push(ele.value);
    });
    if(!uname.value || !email.value || !website.value)
    alert("Enter all the fields to enroll");
else {
    cards.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h5>Name:${uname.value}</h5>
                <p class="gender">Gender:${male.checked ? male.value : female.checked ? female.value : 'other'}</p>
                <p class="email">Email:${email.value}</p>
                <p class="website">Website_Link:${website.value}</p>
                <p class="skills">Skills:${values}</p>
            </div>
            <div class="image">
                <img src=${img} alt="Image"/>
            </div>
        </div>
    `;
}
form.reset();
});
image.addEventListener('change',(e) => {
img = URL.createObjectURL(event.target.files[0]);
})