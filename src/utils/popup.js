const settings = 'scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no'

const getPopupOffset = (width, height) => {
  const wLeft = window.screenLeft ? window.screenLeft : window.screenX
  const wTop = window.screenTop ? window.screenTop : window.screenY

  const left = wLeft + (window.innerWidth / 2) - (width / 2)
  const top = wTop + (window.innerHeight / 2) - (height / 2)

  return { top, left }
}

const getPopupSize = () => {
  return { width: '1020px', height: '618px' }
}

const getPopupDimensions = () => {
  const { width, height } = getPopupSize()
  const { top, left } = getPopupOffset({ width, height })

  return `width=${width},height=${height},top=${top},left=${left}`
}

/* istanbul ignore next */
const openPopup = (url, name, data) => {
  const win = window.open(url, name, `${settings},${getPopupDimensions()}`)
  win.document.write(data)
}

export default openPopup
