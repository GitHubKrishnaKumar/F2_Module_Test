let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');

//form
let form = document.querySelector('.form-data');
let name = document.getElementById('name');
let email = document.getElementById('email');
let user = document.getElementById('user');
let submit = document.getElementById('btn');
localStorage.clear();//to remove all data in local storage

let data = [];//data add in array
let clickCount = 1;
//show form when img1 clicked
img1.addEventListener('click',img1Click);
function img1Click(e){
   if(clickCount==1){
    e.preventDefault();
    form.style.display = "block";   
    showForm.style.display = "none";
    imgDice.style.display = "none";
    congrates.style.display = 'none';
    clickCount=2;
   }
}

//add data when form submit
form.addEventListener('submit',dataAdd);
function dataAdd(e){
    e.preventDefault();
    let obj = {
        "name" : name.value,
        "email" : email.value,
        "user" : user.value
    };
    data.push(obj);

    localStorage.setItem("Data",JSON.stringify(data));

    // clear inputbox
    name.value = '';
    email.value = '';
    user.value = '';
    form.style.display = "none";
    img1.style.outline = "5px solid green";
}


// show data
let showForm = document.querySelector('.show-data');
let showName = document.getElementById('show-name');
let showUser = document.getElementById('show-user');
//show data when img2 clicked

img2.addEventListener('click',img2Click);
function img2Click(e){
    if(clickCount == 2){
        e.preventDefault();
        form.style.display = "none"; 
        showForm.style.display = "block";
        imgDice.style.display = "none";
        congrates.style.display = 'none';
        let show = JSON.parse(localStorage.getItem("Data"));
        for(let i of show){
            // console.log(i.name);
            showName.value = i.name;
            showUser.value = i.user;
        }
        img2.style.outline = "5px solid green";
        clickCount=3;
    }  
}

//dice image
let imgDice = document.querySelector('.dice');
//show dice when click img3
img3.addEventListener('click',showDice);
function showDice(e){
    if(clickCount==3){
        e.preventDefault();
        form.style.display = "none"; 
        showForm.style.display = "none";
        imgDice.style.display = "block";
        congrates.style.display = 'none';
        clickCount = 4;
        img3.style.outline = "5px solid green";
    }
}
//roll dice
imgDice.addEventListener('click',Dice);
let sum = 0;
let roleCount = 0;
let chance = 1;
function Dice(e){
    e.preventDefault();
    let res = sumOfDice();
    if(roleCount==2){
        if(res > 10){
            console.log(res+" after 2 and > 10");
            alert("3 times Dice Click sum is : "+res);
            sum = 0;
            roleCount = 0
            chance++;
            if(chance < 3){
                // if(clickCount==4){
                    img4.addEventListener('click',token);//img4 click able
                // }
                // img4.addEventListener('click',token);//img4 click able
                
                // console.log("chance"+chance);
            }
            else{
                imgDice.style.display = "none";
                // console.log("chance"+chance);
            }
        }
        else{
            // console.log(res+"after 2 and < 10");
            alert("3 times Dice Click sum is : "+res);
            sum = 0;
            roleCount = 0;
            chance++;
            if(chance < 3){
                // console.log("chance"+chance);
            }
            else{
                alert("Bad Luck");
                imgDice.style.display = "none";
                showNum.style.display = "none";
            }
        }
        roleCount = 0;
    }
    else{
        console.log("sum "+res);
        console.log("c "+roleCount);
        
        roleCount++;
        
    }
}
let showNum = document.getElementById('num');
//dice sum
function sumOfDice(){
    let num  = Math.floor(Math.random()*6)+1;
    showNum.innerHTML = num;
    showNum.style.display = "block";
    sum += num;
    return sum;
}




//congrates image showing and generate token
let congrates = document.querySelector('.congrates');
let bool = true;
//token generate
function token(e){
    e.preventDefault();
    if(bool){
        let capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let small_letter = "abcdefghijklmnopqrstuvwxyz";
        let number = "0123456789";
        let special = "!@#$%^&*()_+";
    
        let characters = capital_letter + small_letter + number + special;
    
        let token = "";
        for(let i=0; i<12; i++){
            let random = Math.floor(Math.random()*characters.length);
            token = token + characters[random]
        }
        alert(token); 
        form.style.display = "none";
        showForm.style.display = "none";
        imgDice.style.display = "none";
        congrates.style.display = 'block';
        showNum.style.display = "none";
        img4.style.outline = "5px solid green";
        bool = false;
    }
    
}