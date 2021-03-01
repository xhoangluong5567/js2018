var i = 0; // Đặt biến i = 0
var img  = []; // Đặt một mảng tên là img
var time = 2000; // đặt biến time = 2000 , 2000 là 2000 mili giây = 2 giây

img[0] = 'img/dulichbien.jpg'; // bỏ ảnh vào
img[1] = 'img/dulichnui.jpg';
img[2] = 'img/dulichvn.png';

// tiếp theo tạo 1 sự kiện function tên là doiAnh
function doiAnh(){
    document.slide.src = img[i]; // truyền ảnh vào slide 
    
    if(i < img.length - 1){ // nếu như i < độ dài của mảng img trừ 1 thì i tăng dần
        i++;
    } else {
        i = 0; // ngược lại i = 0
    }
    setTimeout("doiAnh()",time); // setTimeout là chạy sự kiện doiAnh , time là thời gian đổi
}
window.onload = doiAnh; // Dòng này là gọi hàm để cho chạy chương trình
