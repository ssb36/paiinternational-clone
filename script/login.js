
localStorage.removeItem("displayNameOfUser")


let arr_of_details = JSON.parse(localStorage.getItem("user_reg_details")) || [];

// console.log('arr_of_details:', arr_of_details);

let reg_details = () => {


    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let reg_email = document.getElementById("reg_email").value;
    let reg_number = document.getElementById("reg_number").value;
    let first_psd = document.getElementById("first_psd").value;
    let p2 = document.getElementById("second_psd").value;

    let obj = {
        first_name: first_name,
        last_name: last_name,
        reg_email: reg_email,
        reg_number: reg_number,
        first_psd: first_psd,
    };

    // ------------------psd verification -----------------------

    let psd1 = document.getElementById("put_psd_alert");

    let psd2 = document.getElementById("cofirm_psd_alert");



    if (first_psd.length > 0 && p2.length > 0) {

        if (first_psd == p2) {


            psd1.style.display = "none";
            psd2.style.display = "none";

            let exist = document.getElementById("reg_email").value;
            let alert = document.getElementById("mail_alert");

            for (let j = 0; j < arr_of_details.length; j++) {
                if (arr_of_details[j].reg_email == exist) {
                    alert.innerText = "User already existed";
                    alert.style.display = "block";
                    return;
                }
            }

            arr_of_details.push(obj);
            console.log('arr_of_details:', arr_of_details);

            localStorage.setItem("user_reg_details",JSON.stringify(arr_of_details));


            setTimeout(()=>{
                alert_function();
            },2000);


            alert.style.display = "none";

        }
        else {

            psd2.innerText = "Password not matched";
            psd1.style.display = "block";
            psd1.innerText = "Password not matched";
            psd2.style.display = "block";

        }
    }
    else {

        // ------------------psd verification  done-----------------------

        let names_arr = [first_name, last_name, reg_email, reg_number, first_psd, p2];

        let values_arr = ["first_name_alert", "last_name_alert", "mail_alert", "num_alert", "put_psd_alert", "cofirm_psd_alert"];


        for (let i = 0; i < names_arr.length; i++) {
            if (names_arr[i] == "") {
                document.getElementById(`${values_arr[i]}`).style.display = "block";
            }
            else {
                document.getElementById(`${values_arr[i]}`).style.display = "none";
            }

        }

    }


};



let alert_function=()=>{
    alert("Registration Success");
}


//   ----------------------------------------registration done-------------------------------------

let login_btn = () => {

    let username = document.getElementById("username").value;
    let username_psd = document.getElementById("username_psd").value;

    let arr_alert = ["username_alert", "login_psd_alert"];
    let arr_values = [username, username_psd];

    let count=0;

    for (let i = 0; i < arr_values.length; i++) {
        if (arr_values[i] == "") {

            document.getElementById(`${arr_alert[i]}`).style.display = "block";
        }
        else {
            document.getElementById(`${arr_alert[i]}`).style.display = "none";
            
           count++;

        }
    }

    if(count>0){
        let arr=JSON.parse(localStorage.getItem("user_reg_details"));
        check_user(arr,username,username_psd);
        console.log(arr);
    }


}


let check_user=(arr,name,psd)=>{

    let count=0;

    arr.forEach((elem)=>{

        if((elem.reg_email==name || elem.reg_number==name) && elem.first_psd==psd){
           
            setTimeout(()=>{
                alert("Login Succesfull");
                localStorage.setItem("displayNameOfUser",JSON.stringify(elem.first_name));
                window.location.href="../index.html";
            },2000);

           count=1;
           
        }

    })
  
    if(count!=1){
            return setTimeout(()=>{
                alert("Check Username and Password");
            },1000);
    }

}

// ----------------------login done -----------------------------------------


