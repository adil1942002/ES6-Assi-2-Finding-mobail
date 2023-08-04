$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });
let mobiles = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },]
var hea = document.getElementById("hea")
var data = document.getElementById("data")
function model(name){
    let ex = mobiles.filter((filter) => filter.model == name)
    let exb = ex.map((x) => x.brand);
    let exm = ex.map((x) => x.model);
    let exram = ex.map((x) => x.ram);
    let exrom = ex.map((x) => x.rom);
    let excamera = ex.map((x) => x.camera);
    let exprice = ex.map((x) => x.price);
    hea.innerHTML = exm
    
    data.innerHTML = `<div class="card border-success  mx-auto" style="max-width: 15rem; font-size: 20px">
    <div class="card-header bg-transparent border-success text-center">brand : ${exb}</div>
    <div class="card-header bg-transparent border-success text-center">model : ${exm}</div>
<div class="card-header bg-transparent border-success text-center">ram : ${exram}</div>
<div class="card-header bg-transparent border-success text-center">rom : ${exrom}</div>
<div class="card-header bg-transparent border-success text-center">camera : ${excamera}</div>
<div class="card-header bg-transparent border-success text-center">price : ${exprice}</div>
    </div>`
}