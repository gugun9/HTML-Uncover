function pesan(){
    alert("Saya Sedang Belajar JS")
}
window.onload = function()
{
    var a = document.getElementById("tombol");
    a.addEventListener("click", pesan);
}