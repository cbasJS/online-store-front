export const formatNumber = (
  amount,
  decimalCount = 0,
  decimal = ".",
  thousands = ","
) => {
  decimalCount = Math.abs(decimalCount)
  const negativeSign = amount < 0 ? "-" : ""

  let i = parseInt(
    (amount = Math.abs(Number(amount)).toFixed(decimalCount)),
    10
  ).toString()
  let j = i.length > 3 ? i.length % 3 : 0

  return (
    negativeSign +
    (j ? i.substr(0, j) + thousands : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
      : "")
  )
}
