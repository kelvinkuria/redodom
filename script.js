const form = document.querySelector('form')
const animalList = document.querySelector('#animal-list')

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const imageUrl = document.querySelector('#image_url').value.trim();
    const description = document.querySelector("#description").value.trim();

if (!name || !imageUrl || !description){
    alert('Please fill out all fields');
    return
}

const newCard = document.createElement('li');
newCard.innerHTML = `
<img src = "${imageUrl}" alt= "${name}">
<div class = "content">
<h4>${name}</h4>
<p>$ <span class = "donation-count">0</span> Donated</p>
<p>${description}</p>
</div>

<div class = 'buttons'>
<button class="donate">Donate $15</button>
<button class="set-free">Set Free</button>

</div>


`
animalList.appendChild(newCard);
form.reset();

});

animalList.addEventListener("click",(event) =>{
    if (event.target.classList.contains("donate")){
        const donationCount = event.target
        .closest("li")
        .querySelector(".donation-count")
        let currentDonation = parseInt(donationCount.textContent);
        donationCount.textContent = currentDonation + 15;
    }

    if (event.target.classList.contains("set-free")){
        const animalCard = event.target.closest("li");
        animalCard.remove();
    }
})