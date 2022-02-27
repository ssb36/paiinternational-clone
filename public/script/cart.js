let cart_items = JSON.parse(localStorage.getItem("cart_key"));
let main1 = document.getElementById("tag3_left_top");
let sgst_p;
let cgst_p;
let dis_p;
let actual_p;
let discount_p;
let sub_p;
let total_p;
let p_wot;
let p_obj;
display(cart_items);
function display(cart_items) {
  sgst_p = 0;
  cgst_p = 0;
  dis_p = 0;
  actual_p = 0;
  discount_p = 0;
  sub_p = 0;
  total_p = 0;
  p_wot = 0;

  document.getElementById("items_len").textContent = cart_items.length;
  cart_items.map((el, index) => {
    let item_div = document.createElement("div");
    item_div.id = "item_div";

    let div1 = document.createElement("div");
    let item_img = document.createElement("img");
    // item_img.id = "item_img";
    item_img.src = el.image;
    div1.append(item_img);

    let div2 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.id = "item_title";
    p1.textContent = el.title;
    let p2 = document.createElement("p");
    p2.id = "item_qty";
    let b1 = document.createElement("b");
    let qty = 1;
    b1.textContent = `Qty:${qty}`;
    p2.append(b1);

    let p3 = document.createElement("p");

    let span1 = document.createElement("span");
    span1.style.color = "darkslateblue";
    span1.style.fontWeight = "bold";
    let pr = el.price.toFixed(2);
    span1.textContent = `₹${pr}`;
    // console.log(el.price);

    let span2 = document.createElement("span");
    span2.style.color = "darkslategray";
    span2.textContent = `(10%Off)`;

    p3.style.display = "flex";
    p3.append(span1, span2);

    div2.append(p1, p2, p3);

    let div3 = document.createElement("div");
    let div31 = document.createElement("div");
    let span31 = document.createElement("span");
    span31.textContent = "-";
    div31.append(span31);
    let div32 = document.createElement("div");
    let span32 = document.createElement("span");

    span32.textContent = qty;
    div32.append(span32);
    let div33 = document.createElement("div");
    let span33 = document.createElement("span");
    span33.textContent = "+";
    div33.append(span33);
    div3.append(div31, div32, div33);

    //adding functionality to increment qty
    div33.addEventListener("click", qtyInc);
    function qtyInc() {
      qty++;
      span32.textContent = qty;
        b1.textContent = `Qty:${qty}`;
        discount_p += (el.price * 10) / 100;
        actual_p +=  el.price;
        displayPrice();
      }
      
       //adding functionality to deccrement qty
    div31.addEventListener("click", qtyDec);
      function qtyDec() {
          if (qty > 1) {
            qty--;
            span32.textContent = qty;
              b1.textContent = `Qty:${qty}`;
              discount_p -= (el.price * 10) / 100;
              actual_p -=   el.price;
              displayPrice();
        }
     
    }

    let div4 = document.createElement("div");
    let r_img = document.createElement("img");
    r_img.src =
      "data:image/png;base64,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";
    let span41 = document.createElement("span");
    span41.textContent = "REMOVE";

      
      //adding remove functionality
      
    span41.addEventListener("click", function () {
      remove(index);
      // console.log(index);
    });
    div4.append(r_img, span41);
    item_div.append(div1, div2, div3, div4);
    main1.append(item_div);
    //billing
    discount_p += (qty*el.price * 10) / 100;
    actual_p += qty*el.price;
    // console.log(el.price, discount_p)
  });

  displayPrice();
}

function remove(index) {
  cart_items.splice(index, 1);
  localStorage.setItem("cart_key", JSON.stringify(cart_items));
  cart_items = JSON.parse(localStorage.getItem("cart_key"));
  main1.innerHTML = null;
  display(cart_items);
}

function displayPrice() {
  p_wot = actual_p - discount_p;
  cgst_p = (actual_p * 5) / 100;
  sgst_p = (actual_p * 5) / 100;
  sub_p = p_wot + cgst_p + sgst_p;
  total_p = sub_p - dis_p;
     p_obj = {
        p_wot: p_wot,
        cgst_p: cgst_p,
        sgst_p: sgst_p,
        sub_p: sub_p,
       total_p: total_p,
     }
  let price_data = JSON.parse(localStorage.getItem("pai_price_data"));
  console.log("dprice",price_data[discount_p]);
  if (!price_data[discount_p]) {
    localStorage.setItem("pai_price_data", JSON.stringify(p_obj));
  }

  document.getElementById("p_wot").textContent = p_wot.toFixed(2);
  document.getElementById("p_cgst").textContent = cgst_p.toFixed(2);
  document.getElementById("p_sgst").textContent = sgst_p.toFixed(2);
  document.getElementById("sub_total").textContent = sub_p.toFixed(2);
  document.getElementById("dis_p").textContent = dis_p.toFixed(2);

  document.getElementById("tot_p").textContent = total_p.toFixed(2);
}

function coupon_apply() {
  let coupon_code = document.getElementById("e_coupon").value;
  if (coupon_code == "pai123@5") {
    dis_p = (sub_p * 5) / 100;
    console.log("dis_p",dis_p)
    // p_obj.discount_p = dis_p;
    p_obj = {
      p_wot: p_wot,
      cgst_p: cgst_p,
      sgst_p: sgst_p,
      sub_p: sub_p,
     total_p: total_p,
     discount_p:dis_p
  }
    console.log(p_obj);
    localStorage.setItem("pai_price_data", JSON.stringify(p_obj));
    displayPrice();
  } else {
    alert("Invalid coupon code");
  }
}
