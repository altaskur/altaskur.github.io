'use strict'

import { asideStatus } from './aside.js'
import { showHideHeader } from './header.js'
import { generateSnowflake } from './snow.js'
import { changeBackgroundSeason } from './seasonBackground.js'
import { extensionsList } from './extensionList.js'
import { addExtensions } from './extensions.js'

addExtensions(extensionsList)
asideStatus()
showHideHeader()
changeBackgroundSeason()
setInterval(generateSnowflake, 100)
