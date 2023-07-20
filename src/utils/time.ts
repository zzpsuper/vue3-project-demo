export const getTime = () => {
  const hours: number = new Date().getHours()
  let message
  if (hours <= 9) {
    message = '早上'
  } else if (hours <= 12) {
    message = '早上'
  } else if (hours <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}
