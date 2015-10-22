$(function(){
  var numItems = getNumItems();
  var cartTotal = getCartTotal();
  var itemImages = getItemImages();
  triggerOverlay(numItems, cartTotal, itemImages);
});

function getNumItems(){
  return $("#cartItems").children(".item").length;
}

function getCartTotal(){
  return $("#hdrCartSubtotal").children("#subTotal").html();
}

function getItemImages(){
  var $items = $("#cartItems").children(".item");
  var images = $items.find(".itemImg").map(function(){
    return $(this).children("img").attr("src");
  })
  return images;
}

function triggerOverlay(numItems, cartTotal, itemImages){
  var lastScroll = 0 // compare current scroll vs. last scroll so modal isn't re-triggered if user scrolls up
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
      if (bottom10prcntOfPage(currentScroll) && scrollDown(currentScroll, lastScroll)) {
        // remove old cart data if modal previously generated
        if ($(".cart-content").children().length > 0) {
          removeOldCartData();
        }
        // append cart data to modal
        appendImages(itemImages);
        appendNumItems(numItems);
        appendTotal(cartTotal);
        $("#cart-modal").modal("show");

        lastScroll = currentScroll;
      }
  });
}

/* NOTE: The local version has a document body height greater than the viewport height (possibly b/c of
the weird scraped marmot.com HTML) so the hardcoded line in the bottomOfPage function works locally
but the commented out lines below that are the proper version (that works on marmot.com). */
function bottom10prcntOfPage(currentScroll){
  if (currentScroll > 678.6) {
    return true;
  }
  // if (currentScroll + $(window).height() > $(document).height() * 0.9) {
  //   return true;
  // }
}

function scrollDown(currentScroll, lastScroll){
  if (currentScroll > lastScroll || lastScroll == $(document).height) {
    return true;
  }
}

function removeOldCartData(){
  $(".cart-content").empty();
}

function appendImages(images){
  $(".cart-content").append("<div id='item-images'></div>");
  images.each(function(i){
    $("#item-images").append("<img src=" + images[i] + ">");
  })
}

function appendNumItems(num){
  $(".cart-content").append("<div id='item-num'></div>");
  $("#item-num").append("<p>Current Items in Cart:" + num + "</p>");
}

function appendTotal(total){
  $(".cart-content").append("<div id='item-total'></div>");
  $("#item-total").append("<p>Cart Total:" + total + "</p>");
};
