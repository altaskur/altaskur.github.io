export function changeBackgroundSeason () {
  const imageSeasonContainer = document.querySelector('.image-season-inner')

  const season = getSeason()

  imageSeasonContainer.style.backgroundImage = 'url(../src/assets/img/background/' + season + '.jpg)'
}

function getSeason (params) {
  const today = new Date()
  const month = today.getMonth()
  let season

  if (month >= 2 && month <= 4) {
    season = 'spring'
  } else if (month >= 5 && month <= 7) {
    season = 'summer'
  } else if (month >= 8 && month <= 10) {
    season = 'autumn'
  } else {
    season = 'winter'
  }
  return season
}
