'use strict'

import { asideStatus } from './aside.js'
import { showHideHeader } from './header.js'
import { generateSnowflake } from './snow.js'
import { changeBackgroundSeason } from './seasonBackground.js'

asideStatus()
showHideHeader()
changeBackgroundSeason()
setInterval(generateSnowflake, 1000)
