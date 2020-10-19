// require('./themes/minimal.css')

exports.onInitialClientRender = (_, { theme, color, cdn ,...paceOptions }) => {
  const colors = document.createElement('style')
  colors.innerHTML = `
    body {
      --pace-progress-color: ${color}
    }
  `

  
  document.head.appendChild(colors)


  require(`./themes/${theme || 'minimal'}.css`)

  if (cdn) {
    const sc = document.createElement('script')
    sc.src = cdn
    document.body.appendChild(sc)
  } else {
    const pace = require('./pace.min.js')
    pace.start(paceOptions)
  }
}
