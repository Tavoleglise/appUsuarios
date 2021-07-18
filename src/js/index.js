async function getUsers() {
  try {
    const peticion = await fetch("https://reqres.in/api/users?page=2");
    const respuesta = await peticion.json();
    //HTMLCode = `Nombre: ${respuesta.data.first_name}<br>
    //            Apellido: ${respuesta.data.last_name}`
    //document.querySelector(".content").innerHTML += HTMLCode;
    console.log(respuesta.data);
    makeList(respuesta.data);
  } catch (error) {
    console.error(error);
  }
}

const makeList = (lista) => {
  document.querySelector(".content").innerHTML = "";
  for (usuario in lista) {
    let HTMLCode = `Nombre: ${lista[usuario].first_name}<br>
                    Apellido: ${lista[usuario].last_name}<br><br>`;
    document.querySelector(".content").innerHTML += HTMLCode;
  }
};

document.getElementById("nombre").addEventListener("click", getUsers);
