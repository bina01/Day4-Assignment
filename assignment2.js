const DEMO_URL = "https://course-api.com/react-store-products";

function fetchData(DEMO_URL, callback) {
  fetch(DEMO_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log("Error Occurred", error);
    });
}

function handleData(data) {
    document.getElementById("id").innerHTML= data[0].id;
  document.getElementById("name").innerHTML = data[0].name;
  document.getElementById("price").innerHTML= data[0].price;
  document.getElementById("image").innerHTML= data[0].image;
  document.getElementById("category").innerHTML= data[0].category;
  document.getElementById("colors").innerHTML= data[0].colors;
  document.getElementById("company").innerHTML= data[0].company;
  document.getElementById("description").innerHTML= data[0].description;
  document.getElementById("shipping").innerHTML= data[0].shipping;
}
fetchData(DEMO_URL,handleData);
