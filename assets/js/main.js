$(document).on("pagecreate", function(){
    const params = new URLSearchParams(document.location.search);
    const fid = params.get("foodId");

    const isAuthorized = localStorage.getItem("isAuthorized");
    console.log(isAuthorized);
    if(isAuthorized != 'authorized'){
        alert("회원전용 페이지입니다. 로그인 해 주세요.");
        window.location.href="login.html";
    }

    $.ajax({
        type: "get",
        dataType: 'JSON',
        url: '../data/list.json',
        success: function(data){
           const rs = data.filter((list) => list.foodId == fid );
           //console.log(rs);
           const result = rs[0];
           //console.log(result);
           $('.food-title').text(result.foodTitle);
           $('.food-description, .opt').text(result.foodDescription);
           $('#food-img').attr("src", result.detailUrl);
           $('.opt-price').text(result.foodPrice.toLocaleString()+"원");
           let options = '';
           for(let i=0; i < result.foodToppimg.length; i++) {
              options += `<div class="ul-topping-box">
              <div class="topping"
                   style="background-image:url('assets/img/Home/${result.foodToppimg[i].img}.png');"
                   data-optionprice="${result.foodToppimg[i].toppingPrice}"
                   data-option="${result.foodToppimg[i].toppingName}">
                   <p>${result.foodToppimg[i].toppingName}</p>
                   <p>${result.foodToppimg[i].toppingPrice.toLocaleString()}원</p>
              </div>
             </div>`;
            $('.ul-topping').html(options); 
            $('#foodId').val(fid);
            $('#price').val(result.foodPrice);
            $('#option-price').val(result.foodPrice);
            $('#total-price').val(result.foodPrice);
  
            //input
            $('.total').text(result.foodPrice.toLocaleString()+"원");
           }

        },
        error: function(){
          console.log("에러");
        },
        complete: function(){
            myOption();
           $('.ul-topping').slick({
              infinite: true,
              slidesToShow: 3,
              dots: false,
              arrows: false
            });
        }
     });

    $("#logout").on("click",function(){
        storageClear();        
    });

    // $('.ul-topping').not('.slick-initialized').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     dots: false,
    //     arrows: false
    //  });

     $('.btn-wish').on("click",function(){

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