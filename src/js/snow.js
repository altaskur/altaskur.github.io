export function generateSnowflake () {
  const snowflake = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const snowflakeContainer = document.getElementById('snowflake-container')

  snowflake.setAttribute('viewBox', '0 0 100 100')
  snowflake.setAttribute('width', '20')
  snowflake.setAttribute('height', '20')
  snowflake.setAttribute('class', 'snowflake')

  // Calcula una posición aleatoria en el eje x y la establece usando "style left"
  const x = Math.random() * window.innerWidth
  snowflake.setAttribute('style', `left: ${x}px;`)

  // Elimina el último copo de nieve generado
  if (snowflakeContainer.childElementCount > 10) {
    snowflakeContainer.firstChild.remove()
  }

  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  group.innerHTML = `
        <polygon points="50,0 100,50 50,100 0,50" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="40" fill="#FFFFFF" />
        <circle cx="90" cy="20" r="30" fill="#FFFFFF" />
        <circle cx="10" cy="80" r="25" fill="#FFFFFF" />
        <path d="M50,50 L90,20 L10,80 Z" stroke="#FFFFFF" stroke-width="2" fill="none" />
      `

  snowflake.appendChild(group)
  snowflakeContainer.appendChild(snowflake)
}
