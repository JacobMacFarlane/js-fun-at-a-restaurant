function takeOrder(order, deliveryOrders) {
if (deliveryOrders.length < 3) {
deliveryOrders.push(order)
}
return deliveryOrders
}

function refundOrder(orderToRefund, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
if (deliveryOrders[i].orderNumber === orderToRefund) {
  deliveryOrders.splice([i],1);
}
}
return deliveryOrders
}
function listItems(deliveryOrders) {
  
  var namesArray = ""
  for (i = 0; i < deliveryOrders.length-1; i++) {
    namesArray += `${deliveryOrders[i].item}` + ", "
  }
  return namesArray += deliveryOrders[deliveryOrders.length - 1].item
}

function searchOrder(deliveryOrders, ordersItem) {
  var newArrays = []
  for (i = 0; i < deliveryOrders.length; i++) {
    newArrays.push(deliveryOrders[i].item);
  } 
    return newArrays.includes(ordersItem)
  }
  




module.exports = {
   takeOrder,
   refundOrder,
  listItems,
   searchOrder
}