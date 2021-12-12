async function getUsers() {
  let users;
  try {
    const data = await fetch(
      "https://api.github.com/users/vignesh2398/repos",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    users = await data.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
  return users;
}


async function displayUser() {
  let users = await getUsers();
  //   console.log(users);
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";
  users.forEach((user) => {
    // console.log(user.avatar);

    //Load the data from the API
    userList.innerHTML += `<div class="user-container">
    <img class="user-avatar" src="${user.owner.avatar_url}"/>
    <div>
    <h1 class="user-name">Repo name:${user.name}</h1>
    <h1 class="user-name">Forks count:${user.forks_count}</h1>
    <h1 class="user-name">star count:${user.forks_count}</h1>
    <a href="https://github.com/vignesh2398">Go to github Repo</a>
    </div>
    </div>`;
  });
}
displayUser();
function Gorepo(url) {
 
}
