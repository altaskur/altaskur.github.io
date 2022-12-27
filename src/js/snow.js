export function generateSnowflake () {
  const snowflake = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const snowflakeContainer = document.getElementById('snowflake-container')

  snowflake.setAttribute('viewBox', '0 0 100 100')
  const w = Math.random() * 130

  snowflake.setAttribute('width', w)
  snowflake.setAttribute('height', w)
  snowflake.setAttribute('class', 'snowflake')

  const x = Math.random() * window.innerWidth
  snowflake.setAttribute('style', `left: ${x}px;`)

  // Elimina el último copo de nieve generado
  if (snowflakeContainer.childElementCount > 100) {
    snowflakeContainer.firstChild.remove()
  }

  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  group.innerHTML = `
  <circle
  style="fill:#b3b3b3;stroke-width:0.281721"
  id="path111"
  cx="5.7523947"
  cy="5.2550101"
  r="4.4169788" />
<circle
  style="fill:#ffffff;stroke-width:0.225728"
  id="path113"
  cx="5.4782648"
  cy="5.0349364"
  r="3.8632853" />
      `

  snowflake.appendChild(group)
  snowflakeContainer.appendChild(snowflake)
}
