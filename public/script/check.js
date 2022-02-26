console.log("here")
let price_data = JSON.parse(localStorage.getItem("pai_price_data"));
let dis_p = 0; 
console.log("price_data",price_data)
    displayPrice()
function displayPrice() {
//   console.log("price_data",price_data)
    document.getElementById("p_wot").textContent = price_data.p_wot.toFixed(2);
    document.getElementById("p_cgst").textContent = price_data.cgst_p.toFixed(2);
    document.getElementById("p_sgst").textContent = price_data.sgst_p.toFixed(2);
    document.getElementById("sub_total").textContent = price_data.sub_p.toFixed(2);
    document.getElementById("dis_p").textContent = dis_p.toFixed(2);
    document.getElementById("tot_p").textContent =price_data.total_p.toFixed(2);
}
function coupon_apply() {
    let coupon_code = document.getElementById("e_coupon").value;
    if (coupon_code == "pai123@5") {
        dis_p = sub_p * 5 / 100;
        displayPrice()
    }
    else {
        alert("Invalid coupon code")
    }

}