if (document.querySelectorAll('input[name="accept"]:checked') == []) {
  document.getElementById("button").disabled;}  

document.getElementById("button").addEventListener('click', function () {
    var x = document.getElementById("input_url");  
    let checkboxes = document.querySelectorAll('input[name="accept"]:checked');  
    let values = [];
  function download(url, filename) {
        fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = filename;
          link.click();
        })
    .catch(console.error);
    }
      checkboxes.forEach((checkbox) => {
          values.push(checkbox.value);
            });
  for (const valueV of values){
      download(x.value + "/"+ valueV + "/query?outFields=*&where=1%3D1&f=geojson", "layer" + valueV + "_download.geojson");
}})

document.getElementById("buttonAlt").addEventListener('click', function () { 
  let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
  let x = document.getElementById("input_url").value;  

  const xhrZero = new XMLHttpRequest();
  let valueZero = values[0];
  xhrZero.open('GET', x + "/" + valueZero + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueZero + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrZero.onload = () => {
      if (xhrZero.response.includes("error") == false) {
        document.getElementById("layer" + valueZero).style.display = "block";}}
    xhrZero.send(null);  
    
  const xhrOne = new XMLHttpRequest();
  let valueOne = values[1];
  xhrOne.open('GET', x + "/" + valueOne + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueOne + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrOne.onload = () => {
      if (xhrOne.response.includes("error") == false) {
        document.getElementById("layer" + valueOne).style.display = "block";}}
    xhrOne.send(null);  
 
  const xhrTwo = new XMLHttpRequest();
  let valueTwo = values[2];
  xhrTwo.open('GET', x + "/" + valueTwo + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueTwo + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrTwo.onload = () => {
      if (xhrTwo.response.includes("error") == false) {
        document.getElementById("layer" + valueTwo).style.display = "block";}}
    xhrTwo.send(null);   

  const xhrThree = new XMLHttpRequest();
  let valueThree = values[3];
  xhrThree.open('GET', x + "/" + valueThree + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueThree + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrThree.onload = () => {
      if (xhrThree.response.includes("error") == false) {
        document.getElementById("layer" + valueThree).style.display = "block";}}
    xhrThree.send(null);    
  
  const xhrFour = new XMLHttpRequest();
  let valueFour = values[4];
  xhrFour.open('GET', x + "/" + valueFour + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueFour + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrFour.onload = () => {
      if (xhrTwo.response.includes("error") == false) {
        document.getElementById("layer" + valueFour).style.display = "block";}}
    xhrFour.send(null);  
  
  const xhrFive = new XMLHttpRequest();
  let valueFive = values[5];
  xhrFive.open('GET', x + "/" + valueFive + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueFive + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrFive.onload = () => {
      if (xhrTwo.response.includes("error") == false) {
        document.getElementById("layer" + valueFive).style.display = "block";}}
    xhrFive.send(null);    

  const xhrSix = new XMLHttpRequest();
  let valueSix = values[6];
  xhrSix.open('GET', x + "/" + valueSix + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueSix + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrSix.onload = () => {
      if (xhrSix.response.includes("error") == false) {
        document.getElementById("layer" + valueSix).style.display = "block";}}
    xhrSix.send(null);    

  const xhrSeven = new XMLHttpRequest();
  let valueSeven = values[7];
  xhrSeven.open('GET', x + "/" + valueSeven + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueSeven + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrSeven.onload = () => {
      if (xhrSeven.response.includes("error") == false) {
        document.getElementById("layer" + valueSeven).style.display = "block";}}
    xhrSeven.send(null);    

  const xhrEight = new XMLHttpRequest();
  let valueEight = values[8];
  xhrEight.open('GET', x + "/" + valueEight + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueEight + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrEight.onload = () => {
      if (xhrEight.response.includes("error") == false) {
        document.getElementById("layer" + valueEight).style.display = "block";}}
    xhrEight.send(null);  
  
  const xhrNine = new XMLHttpRequest();
  let valueNine = values[9]
  xhrNine.open('GET', x + "/" + valueNine + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueNine + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrNine.onload = () => {
      if (xhrNine.response.includes("error") == false) {
        document.getElementById("layer" + valueNine).style.display = "block";}}
    xhrNine.send(null);  
  
  const xhrTen = new XMLHttpRequest();
  let valueTen = values[10]
  xhrTen.open('GET', x + "/" + valueTen + "/query?outFields=*&where=1%3D1&f=geojson", true);
  console.log(x + "/" + valueTen + "/query?outFields=*&where=1%3D1&f=geojson");
  xhrTen.onload = () => {
      if (xhrTen.response.includes("error") == false) {
        document.getElementById("layer" + valueTen).style.display = "block";}}
    xhrTen.send(null);    

document.getElementById("end").style.display = "block";  
  
})
