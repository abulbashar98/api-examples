const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => displayBuddies(data))
}

loadBuddies()

const displayBuddies = data => {
    console.log(data)
    const buddiesContainer = document.getElementById('buddies')
    const buddies = data.results;
    for (buddy of buddies) {
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} <======> Email: ${buddy.email}`
        buddiesContainer.appendChild(p)
    }
}