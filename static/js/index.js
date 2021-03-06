const width = 128
const height = 64

// automatically move over to /index if user is not explicitly on /index
let link = window.location.href
if (link.substring(link.length-5,link.length) != "index") {
	//window.location.href += "/index"
}

const fromTemplate = (template) => {
	return document.getElementById(template).content.firstElementChild.cloneNode(true)
}

const addFriend = () => {
	console.log(profile_name)
	axios.post(add_friend_url, {username: profile_name}).then((response) => {
		if (response.data.followStatus == "followed")
			profileName.innerHTML = profile_name + "'s profile page" + '<div style="text-align: right"><a class="button is-primary" onclick="addFriend()">Unfollow</a></div>'
		else
			profileName.innerHTML = profile_name + "'s profile page" + '<div style="text-align: right"><a class="button is-primary" onclick="addFriend()">Follow</a></div>'
	})
}



const deleteImage = (id) => {
    axios.post(delete_post_url, {id: id}).then((response) => {
    	window.location.href = window.location.href
    })
}

const getSearchNames = () => {
	const value = document.getElementById("searchBar").value

	axios.post(search_bar_url, {entry: value}).then(response => {
		let nameList = response.data.nameList
		let res = document.getElementById("searchBarResults")
		res.innerHTML = ""
		if (value != "") {
			for (const name of nameList) {
				res.innerHTML += `<tr><td><a href="${mainUrl}/${name}">${name}</a></td></tr>`
			}
		}
	})
}

const closeSearchNames = () => {
	console.log("test")
	setTimeout(() => {document.getElementById("searchBarResults").innerHTML = "<tr></tr>"}, 100)
}
