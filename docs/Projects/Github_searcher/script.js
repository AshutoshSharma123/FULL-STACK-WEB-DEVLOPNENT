let searchBtn = document.querySelector('#searchBtn');
let usernameInp = document.querySelector('#usernameInp');
let card = document.querySelector('#profile');



function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((raw) => {
            if (!raw.ok) throw new Error('User not found');
            return raw.json();
        });
}


function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw) => {
        if (!raw.ok) throw new Error('Failed to fetch repos ');
        return raw.json();
    });

}


function decorateProfileData(details) {
    console.log(details);

    // let data = `    <!-- Avatar Placeholder -->
    //         <div class="w-[8rem] h-[8rem] rounded-full  bg-gray-800  ">   <img class='rounded-full w-[8rem] h-[8rem]' src="${details.avatar_url}" alt=""></div>

    //         <!-- Info Placeholder -->
    //         <div class="flex-1 space-y-4">
    //             <div class="w-auto p-1 h-auto flex-start">${details.login}</div>
    //                             <div class="w-auto p-1 h-auto flex-start text-3xl">${details.name ? details.name : ''}</div>
    //             <div class=" w-auto p-1 h-auto  "> ${details.bio ? details.bio : ''}  </div>
    //             <div class=" w-auto p-1 h-auto  "> ${details.location ? details.location : ''}  </div>

    //             <!-- Stats Placeholder -->
    //             <div class="flex justify-center md:justify-start gap-10 mt-6">
    //                 <div class="w-auto p-1 h-auto bg-gray-800 flex flex-col rounded ">${details.followers}
    //                 <p>Followers</p></div>
    //                 <div class="w-auto p-1 h-auto bg-gray-800 rounded ">${details.following}<p>Following</p></div>
    //                 <div class="w-auto p-1 h-auto bg-gray-800 rounded ">${details.public_repos}<p>Repos</p></div>
    //             </div>
    //         </div>`



    // card.innerHTML = data
    let data = `
  <!-- Avatar -->
  <div class="w-[8rem] h-[8rem] rounded-full overflow-hidden bg-gray-800">
    <img class="rounded-full w-[8rem] h-[8rem]" src="${details.avatar_url}" alt="Avatar">
  </div>

  <!-- Info -->
  <div class="flex-1 space-y-3 text-gray-200">
    <div class="text-xl font-bold">${details.login || "Not available"}</div>
    ${details.name ? `<div class="text-3xl font-semibold">${details.name}</div>` : ""}
    ${details.bio ? `<div class="text-sm text-gray-400 italic">${details.bio}</div>` : ""}
    ${details.location ? `<div class="flex items-center gap-2 text-sm text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"/>
        </svg>
        ${details.location}
      </div>` : ""}
    
    <!-- Stats -->
    <div class="flex justify-center md:justify-start gap-6 mt-6">
      <div class="px-4 py-2 bg-gray-800 rounded-lg text-center">
        <p class="text-lg font-bold">${details.followers}</p>
        <p class="text-sm text-gray-400">Followers</p>
      </div>
      <div class="px-4 py-2 bg-gray-800 rounded-lg text-center">
        <p class="text-lg font-bold">${details.following}</p>
        <p class="text-sm text-gray-400">Following</p>
      </div>
      <div class="px-4 py-2 bg-gray-800 rounded-lg text-center">
        <p class="text-lg font-bold">${details.public_repos}</p>
        <p class="text-sm text-gray-400">Repos</p>
      </div>
    </div>
  </div>
`;

    card.innerHTML = data;

}


function decorateRepoData(repositories) {
    console.log(repositories);

    let data = ``
    repositories.forEach((repo) => {
        data += `<!-- Repo Card Placeholder -->
                <div class="p-1 rounded-xl bg-gray-900/50 backdrop-blur-sm border  border-gray-800 ">
                    <div class="h-auto w-auto  rounded mb-3">
                        <h1 class="text-xl font-semibold">${repo.name}</h1>
                    </div>
                    <div class="flex gap-3 flex-wrap justify-between">
                        <div class="h-auto w-auto rounded mb-2"><i class="fa-solid fa-box-archive"></i> : ${repo.stargazers_count}</div>
                        <div class="h-auto w-auto  rounded mb-4"><i class="fa-solid fa-eye"></i> : ${repo.visibility}</div>
                        <div class="h-auto w-auto rounded"><a href="${repo.html_url}"><i
                                    class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                    </div>

                </div>`
    })

    document.querySelector('#repos').innerHTML = data

}

searchBtn.addEventListener('click', () => {
    let username = usernameInp.value.trim()  // trim the extra space
    if (username.length > 0) {
        getProfileData(username).then(function (data) {
            decorateProfileData(data)
        })
    }
    else {
        alert('Enter a valid username')
    }

    if (username) {
        getRepos(username).then(function (data) {
            decorateRepoData(data)
        })
    }
})