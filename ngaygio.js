function Clock() {
//khởi tạo và khai báo hàm
var d=new Date();
var s=d.getSeconds();
var m=d.getMinutes();
var h=d.getHours();
var day=d.getDay();
var date=d.getDate();
var month=d.getMonth();
var year=d.getFullYear();
var days=new Array("Chủ nhật","Thứ hai","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7");
var months=new Array("1","2","3","4","5","6","7","8","9","10","11","12");
//Hiện kết quả lên màn hình
document.getElementById("ngaygio").innerHTML=days[day] + " Ngày " + date + "/" +months[month] + "/" + year + " Bây giờ là "+ " " + h + ":" + m + ":" + s + " "; setTimeout("Clock()",1000); } Clock();