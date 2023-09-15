function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}

function timestampToDate(timestamp) {
  const date = new Date(timestamp)
  return (
    [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getFullYear()).slice(-2)
    ].join('/') +
    ' às ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes())
      // padTo2Digits(date.getSeconds()),
    ].join(':')
  )
}

export { timestampToDate }
