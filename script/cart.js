let cart_items1 = [{ "id": 9, "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ", "price": 64, "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system", "category": "electronics", "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "rating": { "rate": 3.3, "count": 203 } },
{ "id": 10, "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", "price": 109, "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)", "category": "electronics", "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "rating": { "rate": 2.9, "count": 470 } },
{ "id": 11, "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", "price": 109, "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.", "category": "electronics", "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "rating": { "rate": 4.8, "count": 319 } },
{ "id": 12, "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", "price": 114, "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty", "category": "electronics", "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "rating": { "rate": 4.8, "count": 400 } },
{ "id": 13, "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", "price": 599, "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz", "category": "electronics", "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "rating": { "rate": 2.9, "count": 250 } },
{ "id": 14, "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ", "price": 999.99, "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag", "category": "electronics", "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "rating": { "rate": 2.2, "count": 140 } }]

localStorage.setItem("cart_data", JSON.stringify(cart_items1));
let cart_items = JSON.parse(localStorage.getItem("cart_data"));
let main1 = document.getElementById("tag3_left_top");

let sgst_p;
let cgst_p;
let dis_p;
let actual_p;
let discount_p;
let sub_p;
let total_p;
let p_wot;
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

    document.getElementById("items_len").textContent = cart_items.length
    cart_items.map((el, index) => {

        let item_div = document.createElement("div");
        item_div.id = "item_div"

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
        b1.textContent = `Qty:1`;
        p2.append(b1);

        let p3 = document.createElement("p");

        let span1 = document.createElement("span");
        span1.style.color = "darkslateblue";
        span1.style.fontWeight = "bold";
        let pr = el.price.toFixed(2);
        span1.textContent = `₹${pr}`
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
        span32.textContent = "1";
        div32.append(span32);
        let div33 = document.createElement("div");
        let span33 = document.createElement("span");
        span33.textContent = "+";
        div33.append(span33);
        div3.append(div31, div32, div33);


        let div4 = document.createElement("div");
        let r_img = document.createElement("img");
        r_img.src = "data:image/png;base64,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"
        let span41 = document.createElement("span");
        span41.textContent = "REMOVE";

        span41.addEventListener("click", function () {
            remove(index);
            // console.log(index);
        })
        div4.append(r_img, span41);
        item_div.append(div1, div2, div3, div4);
        main1.append(item_div);
        //billing
        discount_p += (el.price * 10) / 100
        actual_p += el.price;
        // console.log(el.price, discount_p)
    })

    displayPrice()
}

function remove(index) {
    cart_items.splice(index, 1);
    localStorage.setItem("cart_data", JSON.stringify(cart_items));
    cart_items = JSON.parse(localStorage.getItem("cart_data"));
    main1.innerHTML = null;
    display(cart_items);
}

function displayPrice() {
    p_wot = actual_p - discount_p;
    cgst_p = (actual_p * 5 / 100);
    sgst_p = (actual_p * 5 / 100);

    // console.log("p_wot:", p_wot);
    // console.log("cgst_p:", cgst_p);
    // console.log("sgst_p:", sgst_p);
    sub_p = p_wot + cgst_p + sgst_p;
    // console.log("sub_p", sub_p);
    total_p = sub_p - dis_p;
    // console.log(total_p);
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
        dis_p = sub_p * 5 / 100;
        displayPrice()
    }
    else {
        alert("Invalid coupon code")
    }

}

