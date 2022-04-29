const links = {
    gitHubName: 'luca-merighi',
    instagram: 'luca.merighii',
    facebook: 'profile.php?id=100076687875621'
}

function getGitHubProfileData() {
    const ghAPIUrl = `https://api.github.com/users/${links.gitHubName}`

    fetch(ghAPIUrl)
        .then(response => response.json())
        .then(data => {
            const profileImg = document.querySelector('.profile-picture')
            const userName = document.querySelector('.text h1')
            const userLink = document.querySelector('.text a')
            const loginGH = document.querySelector('.text a span')
            const biography = document.querySelector('.text p')

            profileImg.src = data.avatar_url
            userName.innerText = data.name
            userLink.href = data.html_url
            loginGH.innerText = data.login
            biography.innerText = data.bio
        })   
}

getGitHubProfileData()

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${links[social]}`
    }
}

changeSocialMediaLinks()