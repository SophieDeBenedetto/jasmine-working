describe("Cart", function() {

  beforeEach(function() {
    setFixtures('<div id="cartItems"><div class="item"><div class="itemImg"><img src="http://cdnmedia.marmot.com/images/product/tile/46200_2975_f.jpg" alt="Women\'s PreCip Jacket" title="Women\'s PreCip Jacket">   </div>   <div class="itemDtls">    <ul>     <li class="itemTitle">Women\'s PreCip Jacket</li>     <li>Price: $100.00</li>     <li>Arctic Navy</li>     <li>Small</li>     <li>Qty: 1&nbsp;&nbsp;<a id="rm-d45e227b-17f9-40ff-9e63-83d2857fd9b4" class="itemRemove" href="#"><img alt="Remove" src="/includes/img/interface/icon-trash.jpg"></a></li>    </ul>   </div>  </div><div class="item">   <div class="itemImg">    <img src="http://cdnmedia.marmot.com/images/product/tile/78050_001_f.jpg" alt="Women\'s Hailey Jacket" title="Women\'s Hailey Jacket">   </div>   <div class="itemDtls">    <ul>     <li class="itemTitle">Women\'s Hailey Jacket</li>     <li>Price: $250.00</li>     <li>Black</li>     <li>Small</li>     <li>Qty: 1&nbsp;&nbsp;<a id="rm-a775ed15-a35e-4b04-be5e-9011984cbec9" class="itemRemove" href="#"><img alt="Remove" src="/includes/img/interface/icon-trash.jpg"></a></li>    </ul>   </div>  </div></div>  <div id="coBlock"><div id="coBlock" style="display: block;"><div id="hdrCartSubtotal">Subtotal <span id="subTotal">$350.00</span></div>');
  });

  it('#getNumItems should return number of cart items', function() {
    expect(getNumItems()).toBe(2);
  });

  it('#getCartTotal should return cart total', function() {
    expect(getCartTotal()).toBe("$350.00");
  });

  it('#getItemImages should select all item images', function() {
    expect(getItemImages().length).toBe(2);
  });

  it('#getItemImages should return an array of image links', function() {
    expect(getItemImages()).toBe(["http://cdnmedia.marmot.com/images/product/tile/46200_2975_f.jpg", "http://cdnmedia.marmot.com/images/product/tile/78050_001_f.jpg"]);
  });

});

  