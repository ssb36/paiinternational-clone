
import navbar from "../script/testnav.js";

let div_container=document.getElementById("div_container");

div_container.innerHTML=navbar();


import footer from "../script/footer.js";

let div_footer=document.getElementById("footer");

div_footer.innerHTML=footer();


// ----------------------Import done---------------------------

  let map_container = document.getElementById("map_container");

  let city = document.getElementById("search_store");

  // console.log(city.value);

  let showMapData = () => {
    map_container.innerHTML = "";

    console.log(city.value);

    let div = document.createElement("div");

    div.innerHTML =

    `<iframe
      width="100%"
      height="100%"
      style="border:0"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/search?q=${city.value}&key=AIzaSyAU_WGFMPPzhmbCqWgSJP3VSjG2VTzFfmI"
    ></iframe>`;

    map_container.append(div);
  };

  showMapData();

  // ---------------------------------------------------------------

  let arr = [
    {
      title: "Pai Mobiles - Channasandra",
      address:
        " # 860, Utharahalli Kengeri Main Road, Channasandra, Bangalore - 560061",
    },
    {
      title: "PAI MOBILES - GOTTIGERE",
      address:
        " No.2, VP Katha No.301, Gottigere Village,Uttarahalli Hobli, Bangalore South Taluk,Bangalore - 560083",
    },
    {
      title: "PAI MOBILES - GANDHIBAZAAR ",
      address:
        " # 76/, Gandhi Bazaar Main Road, Basavanagudi, Bangalore - 560004",
    },
    {
      title: "PAI MOBILES - SRINIVASANAGAR ",
      address:
        " No. 14, 80 Feet Road, Srinivasa Nagar, B.S.K. 1st Stage Bangalore – - 560050",
    },
    {
      title: "PAI MOBILES - KUMARASWAMY LAYOUT ",
      address: " # 1629, 50 Ft Road, Kumaraswamy Layout, Bangalore - 560078",
    },
    {
      title: "PAI MOBILES - JAYANAGAR ",
      address:
        " No.23/1, Old No. 1855, 40th ‘A’ Cross,9th Block, BBMP Ward No.170,Jayanagar East, Bangalore - 560069",
    },
  ];

  let random = document.getElementById("random_stores");

  // --------------------------------------------------------------

  let random_locator = (arr) => {
    random.innerHTML = "";

    arr.map((elem) => {
      let div = document.createElement("div");

      let title = document.createElement("h3");
      title.innerText = elem.title;

      let mbs = document.createElement("h4");
      mbs.innerText = "MBS Showroom";

      let address = document.createElement("p");
      address.innerText = elem.address;

      div.append(title, mbs, address);

      random.append(div);


      div.onclick=()=>{
        city.value=title.innerText;
        // console.log(city.value);

        showMapData();


      }



    });
  };

  random_locator(arr);
