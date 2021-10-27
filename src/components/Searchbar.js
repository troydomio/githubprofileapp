import {useState}from 'react'


const Searchbar = () => {
    const[username, SetUsername]= useState([])
    const[data, SetData]= useState([])
    const[languages, setLanguages]= useState([])

    const handleChange = (e) => {
       SetUsername(e.target.value);
    }

  

    const handleClick = async () => {
        const url = 'https://api.github.com/users/'
        const urlforlanguages = 'https://github-readme-stats.vercel.app/api/top-langs/?username='
        // grab these elements and delete them if a valid username is submitted
        const btn = document.getElementById('btn')
        const input = document.getElementById('input')
        const image = document.getElementById('img')
        const h1 = document.getElementById('h1')
        const body = document.getElementById('search')
        body.className="bodyprofile"
       
        // fetch data
        const profile = await fetch(`${url}${username}`)
        const profilejson = await profile.json();
       
            if(profilejson.message === 'Not Found') {
                alert('username not found, try another one!')
            } else{
                SetData(profilejson)
                btn.remove();
                input.remove();
                image.remove();
                h1.remove();
                 
             // I want these elements to show up to display a valid user's information
                const div = document.createElement('div')

                const avatar = document.createElement('img')
                avatar.className="avatar"
                const name = document.createElement('p')
                const bio = document.createElement('p')
                const username = document.createElement('p')
                const accountcreated = document.createElement('p')
                const divtop = document.createElement('div')
                divtop.className='divtop'
                const divinfo = document.createElement('div')
                divinfo.className='divinfo'
                const divavatar = document.createElement('div')
                divavatar.className='divavatar'

                const div2 = document.createElement('div')
                div2.className='div2'
                const reposdiv = document.createElement('div')
                reposdiv.className='reposdiv'
                const followersdiv = document.createElement('div')
                followersdiv.className='followersdiv'
                const followingdiv = document.createElement('div')
                followingdiv.className='followingdiv'


                const repos = document.createElement('p')
                const followers = document.createElement('p')
                const following = document.createElement('p')

              avatar.src=profilejson.avatar_url
              name.innerHTML= profilejson.name
              bio.innerHTML = profilejson.bio
              username.innerHTML=`@${profilejson.login}`
              accountcreated.innerHTML=`Joined: ${profilejson.created_at}`
              repos.innerHTML=`Repos: ${profilejson.public_repos}`
            followers.innerHTML=`Followers: ${profilejson.followers}`
            following.innerHTML= `Following: ${profilejson.following}`

                body.appendChild(div)
                reposdiv.append(repos)
                followersdiv.append(followers)
                followingdiv.append(following)
                div2.append(reposdiv, followersdiv,followingdiv)
                divinfo.append(name, username, bio, accountcreated)
                divavatar.append(avatar)
                divtop.append(divavatar, divinfo)
                div.append(divtop, div2)
            }   


    }

    return (
        <div className="search-section" id='search'>
            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" id="img"/>
            <h1 id="h1">Find Your GitHub Profile</h1>
            <input  id="input" type="text" placeholder="GitHub Username" value={username} onChange={handleChange}></input>
            <p></p>
            <button id="btn" type="submit" onClick={handleClick}>search</button>
        </div>
    )
}

export default Searchbar
