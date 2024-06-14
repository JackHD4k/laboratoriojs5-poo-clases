class employed {
  constructor(code, name, surname, email, cargo) {
    this.code = code;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.cargo = cargo;
  }

  sueldoBruto() {
    let sueldoBase;
    switch (this.cargo) {
      case "Jefe":
        sueldoBase = 5000;
        break;
      case "Analista":
        sueldoBase = 4000;
        break;
      case "Programador":
        sueldoBase = 3000;
        break;
      case "Soporte":
        sueldoBase = 2000;
        break;
      case "Asistente":
        sueldoBase = 1500;
        break;
      default:
        sueldoBase = 0;
    }
    return sueldoBase;
  }

  descuento() {
    return this.sueldoBruto() * 0.125;
  }

  sueldoNeto() {
    return this.sueldoBruto() - this.descuento();
  }
}

document.getElementById("empleadoFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const codigo = document.getElementById("code").value;
    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("surname").value;
    const correo = document.getElementById("email").value;
    const cargo = document.getElementById("cargo").value;

    const empleado = new employed(codigo, nombre, apellido, correo, cargo);

    alert("Su sueldo neto es: " + empleado.sueldoNeto());
  });
