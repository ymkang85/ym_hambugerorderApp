$(document).on("pagecreate", function(){
    //$.get(url, function(){ ... })
   // const search = $("#search").val();
    const isAuthorized = localStorage.getItem("isAuthorized");
    //console.log(isAuthorized);
    if(isAuthorized != 'authorized'){
        alert("회원전용 페이지입니다. 로그인 해 주세요.");
        window.location.href="login.html";
    }
    // console.log(search);
    $.ajax({
        type: "get",
        url: "../data/list.json",
        dataType: "json",
        success: function(data){
           //console.log(data);
           data.forEach((list, i)=>{
            let foodStar = "";  
            for(let i = 0; i<list.foodStar.length; i++){
                switch(list.foodStar[i]){
                    case "star":
                      foodStar += '<i class="ri-star-fill"></i> ';
                    break;
                    case "half":
                      foodStar += '<i class="ri-star-half"></i> ';
                    break;
                    case "line":
                      foodStar += '<i class="ri-star-line"></i> ';
                    break;
                }
            }
            // console.log(foodStar);
              $(".list").append(`<a href="main.html?foodId=${list.foodId}" data-ajax="false" class="row food-card">
              <div class="col-4 my-auto">
                 <img src="${list.foodImg}" 
                      class="img-fluid" alt="${list.foodTitle}" />
              </div>
              <div class="col-7">
                 <h1 class="food-title">
                     ${list.foodTitle}
                 </h1>
                 <p class="food-description">
                     ${list.foodDescription}
                 </p>
                 <div class="food-ratings">
                    ${foodStar} 
                 </div>
                 <p class="food-price">
                     ${list.foodPrice.toLocaleString()}원
                 </p>
              </div>
              <div class="col-1">
                 <p class="food-wish">
                     <i class="ri-heart-fill"></i>
                 </p>
              </div>
            </a>`);
           });
        },
        error: function(){
            console.log("에러");
        }
    });

    $("#logout").on("click",function(){
        storageClear();        
    });

    $('.slider').not('.slick-initialized').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true,
        arrows: false
     });

});

function distorySlick(){
    if($('.ul-topping, .slick').hasClass('slick-initialized')){
        $('.ul-topping, .slick').slick('unslick');
    }
}

function storageClear(){
    const myStorage = ['wishItems', 'userid', 'cartItems', 'members', 'userpass', 'isAuthorized'];
    for(let i = 0; i < myStorage.length; i++){
        localStorage.removeItem(myStorage[i]);
    }
    window.location.href="index.html";
}