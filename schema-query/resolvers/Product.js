module.exports = {
  discountPrice(currentObject) {
    if (currentObject.discount) {
      return currentObject.price - currentObject.discount
    }
    return currentObject.price
  }
}