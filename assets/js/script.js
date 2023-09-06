function myoption(){

    let price = parseInt($("#price").val());  //최초 상품 가격
    let totalprice = $("#price").val();  // 총 상품가격 변수 선언
 
     console.log(totalprice);

    let option_arr = [];  //상품 옵션은 여러개 일수 있으므로 배열로 선언
        
    $('.down').click(function(){  //수량 다운버튼
        let ct = $('.count-only').val();  //현재 수량을 가져옴
        if(ct > 1) {  //수량이 1보다 작을 경우 버튼 무시
           ct--; //현재 수량에서 1을 뺌
           $('.count-only').val(ct);  //1을 뺀수를 저장
           let optionprice = $('#option-price').val(); //옵션이 포함된 가격을 가져옴
           totalprice = optionprice * ct;  //가격에 수량을 더함 
           $('#total-price').val(totalprice); 
           $('.total').text(totalprice.toLocaleString() + "원");   
        }
    });

    $('.up').click(function(){
        let ct = $('.count-only').val();
        ct++;
        $('.count-only').val(ct);
        let optionprice = $('#option-price').val();
        totalprice = optionprice * ct;
        $('#total-price').val(totalprice);
        $('.total').text(totalprice.toLocaleString() + "원");    
    });

   // $('.topping').click(function(){   
   $(document).on("click", ".topping", function(){ 
       const option = $(this).data("option");
       let ct = parseInt($('.count-only').val());
       let addprice = parseInt($(this).data("optionprice"));
       let addprice2 = addprice * ct;
       price = parseInt($('#option-price').val());

       if($(this).hasClass('active')){
           $(this).removeClass('active');
           totalprice = parseInt(totalprice) - addprice2;
           optionprice = price - addprice;
           option_arr.pop(option);
       }else{  
           $(this).addClass('active');
           totalprice = parseInt(totalprice) + addprice2;
           optionprice = price + addprice;
           option_arr.push(option);
       }        
           $('#total-price').val(totalprice);
           $('#option-price').val(optionprice);
           $('.total').text(totalprice.toLocaleString() + "원");
    });
    
}

