function login(){
    const loginUsr = 'admin';
    const loginPass = '1234';
    const user = document.getElementById('inputUsername').value;
    const pass = document.getElementById('inputPassword').value;

    if(user == loginUsr && pass == loginPass){
        //localstorage 아이디 패스워드 저장
        localStorage.setItem('userid', user);
        localStorage.setItem('userpass', pass);
        localStorage.setItem('isAuthorized', 'authorized');
        window.location.href="home.html";
    }else{        
        $("#popupDialog").popup("open");        
    }
}