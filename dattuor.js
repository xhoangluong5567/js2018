function checkInfo() {
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var tour = document.getElementById('tour').value;
    var noidung = document.getElementById('noidung').value;


    if(user == ""){
        document.getElementById('username').innerHTML = "** Mời nhập Họ và Tên";
        return false;
    }
    else if (email == ""){
         document.getElementById('emails').innerHTML = "** Mời nhập Email";
        return false;
    }
    else if (tour == ""){
        document.getElementById('tours').innerHTML = "** Mời nhập Tour";
       return false;
   }
   else if (noidung == ""){
    document.getElementById('noidungs').innerHTML = "** Mời nhập Nội dung";
   return false;
    }
    else if(email.indexOf('@') <=0){
    document.getElementById('emails').innerHTML = "** Vị trí @ không hợp lệ";
    return false;
    }
    else{
     alert('Gửi thành công');
    }
}