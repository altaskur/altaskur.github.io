
export function addExtensions (extensionsList) {
  const sectionSocial = document.querySelector('section#vscode')
  const cardContainer = sectionSocial.querySelector('div.card-container')
  extensionsList.forEach(extension => {
    const cardBody = document.createElement('div')
    cardBody.classList.add('card')
    const headCard = document.createElement('div')
    headCard.classList.add('head')
    const headIcon = document.createElement('div')
    headIcon.classList.add('icon', extension.icon)
    const cardName = document.createElement('div')
    cardName.classList.add('name')
    const cardNameP = document.createElement('p')
    cardNameP.textContent = extension.name

    cardName.appendChild(cardNameP)
    headCard.appendChild(headIcon)
    cardBody.append(headCard, cardName)
    cardContainer.appendChild(cardBody)
  })
}
