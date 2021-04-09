import axios from "axios"
console.log(axios);

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

let cards = document.querySelector(".cards");

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
]

followersArray.forEach((array) => {
  const element = array.index
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


function cardMaker(object){
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const userAddress = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  img.setAttribute = ("src", object.avatar_url);
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  name.textContent = object.name;
  username.classList.add('username');
  username.textContent = object.login;
  location.textContent = object.location;
  profile.appendChild(userAddress);
  userAddress.href = object.html_url;
  userAddress.textContent = "address to users github page";
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  card.appendChild(bio);
  bio.textContent = `Bio: ${object.bio}`;

  card.appendChild(img);
  card.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  card.appendChild(profile);
  card.appendChild(userAddress);
  card.appendChild(followers);
  card.appendChild(following);

  return card;
}

axios
.get(`https://api.github.com/users/JasmineLaneGarcia`)

.then((res) => {
  console.log(res.data);
  const userInfo = res.data;
  const getCard = cardMaker(userInfo);
  cards.appendChild(getCard);
})

.catch((err) => {
  console.log(err);
})

