$(document).on("pagecreate", function(){
    const params = new URLSearchParams(document.location.search);
    const fid = params.get("foodId");
    $.ajax({
        type: "get", 
        dataType: "JSON", 
        url: "../data/list.json",
        success: function(data){
            const rs = data.filter((list) => list.foodId == fid );
            console.log(rs);
            $('.list').append(`<h1 class="food-title text-center">
          칠리새우를 넣은 진짜 맛좋은 더블버거
        </h1>
        <p class="food-description">
          지금 막 출시한 새로운 신상품, 오후 3시면 벌써 품절되는 인기 상품 이랍니다.
        </p>
     <div class="main-top">
        <div class="main-top-img">
            <div class="main-top-img-background"></div> 
            <img src="assets/img/Home/Trending Picks/Burger-img.png" 
                      class="img-fluid img" alt="햄버거" />         
        </div>
        <div class="container my-3">
            <div class="row">
                <div class="opt">
                    칠리새우를 넣은 진짜 맛좋은 더블버거
                </div>
                <div class="opt-price">
                    15,000원
                </div>
            </div>
        </div>


        <div class="ul-topping">

            <div class="ul-topping-box">
                <div class="topping"
                     style="background-image:url('assets/img/Home/top1.png');"
                     data-optionprice="800"
                     data-option="고기추가">
                     <p>고기추가</p>
                     <p>800원</p>
                </div>
            </div>

            <div class="ul-topping-box">
                <div class="topping"
                     style="background-image:url('assets/img/Home/top2.png');"
                     data-optionprice="500"
                     data-option="야채추가">
                     <p>야채추가</p>
                     <p>500원</p>
                </div>
            </div>

            <div class="ul-topping-box">
                <div class="topping"
                     style="background-image:url('assets/img/Home/top3.png');"
                     data-optionprice="1500"
                     data-option="치즈추가">
                     <p>치즈추가</p>
                     <p>1,500원</p>
                </div>
            </div>

            <div class="ul-topping-box">
                <div class="topping"
                     style="background-image:url('assets/img/Home/top4.png');"
                     data-optionprice="500"
                     data-option="딸기쨈추가">
                     <p>딸기쨈추가</p>
                     <p>500원</p>
                </div>
            </div>

            <div class="ul-topping-box">
                <div class="topping"
                     style="background-image:url('assets/img/Home/top5.png');"
                     data-optionprice="1200"
                     data-option="양상추추가">
                     <p>양상추추가</p>
                     <p>1,200원</p>
                </div>
            </div>

            <div class="ul-topping-box">
                <div class="topping"
                     style="background-image:url('assets/img/Home/top6.png');"
                     data-optionprice="500"
                     data-option="버섯추가">
                     <p>버섯추가</p>
                     <p>500원</p>
                </div>
            </div>

            <div class="ul-topping-box">
                <div class="topping"
                     style="background-image:url('assets/img/Home/top7.png');"
                     data-optionprice="900"
                     data-option="토마토추가">
                     <p>토마토추가</p>
                     <p>900원</p>
                </div>
            </div>

        </div>
        <div class="container my-4 ml-3">
            <div class="row mb-5">
                <div class="col-5 pt-3">수량선택 :</div>
                <div class="col-7">
                    <div class="quantity-box d-flex">
                        <span class="down"><i class="ri-arrow-down-s-line"></i></span>
                        <input type="number" class="count-only" readonly value="1">
                        <span class="up"><i class="ri-arrow-up-s-line"></i></span>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-4">합계금액 : </div>
                <div class="col-8 text-right total">15,000원</div>
            </div>
            <input type="hidden" id="price" name="price" value="15000">
            <input type="hidden" id="option-price" value="15000">
            <input type="hidden" id="total-price" name="total-price" value="15000">        
            <input type="hidden" id="option" />
        </div> 
     `);
        },
        error: function(){
            console.log("에러");
        }
    });
});