

const url ="https://jsonplaceholder.typicode.com/users"

class DataEnpoint {
    constructor() {
        this.data = [];
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = ()=> {
            this.data = JSON.parse(xhr.responseText);
            console.log("Datos cargados:", this.data.length, "usuarios");
        };
        xhr.send();        
    }
    listarNombres(){
        this.data.forEach(u => console.log(u.name));
    }

    buscarInfoBasica() {
        const nombre = prompt("Ingresa el nombre del usuario:");
        if (!nombre) return;
        const user = this.data.find(u =>
            u.name.toLowerCase().includes(nombre.toLowerCase())
        );
        if (user) {
            console.log("Username:", user.username);
            console.log("Email:", user.email);            
        } else {
            console.log("Usuario no encontrado");
            
        }
    }

    buscarDireccion() {
        const nombre = prompt("Ingresa el nombre del usuario:");
        if (!nombre) return;
        const user = this.data.find(u =>
            u.name.toLowerCase().includes(nombre.toLowerCase())
        );
        if (user) {
            const d = user.address;
            console.log("Calle:", d.street);
            console.log("Suite:", d.suite);
            console.log("Ciudad:", d.city);
            console.log("Código Postal:", d.zipcode);            
        } else {
            console.log("Usuario no encontrado");            
        }
    }

    buscarInfoAvanzada() {
        const nombre = prompt("Ingresa el nombre del usuario:");
        if (!nombre) return;
        const user = this.data.find(u =>
            u.name.toLowerCase().includes(nombre.toLowerCase())
        );
        if (user) {
            console.log("Teléfono:", user.phone);
            console.log("Sitio Web:", user.website);
            console.log("Compañia:");
            console.log("  Nombre:", user.company.name);            
        } else {
            console.log("Usuario no encontrado");            
        }
    }

    listarCompanias() {
        this.data.forEach(u => {
            console.log(u.company.name, "-", u.company.catchPhrase);            
        });
    }

    listarNombresOrdenados() {
        const nombres = this.data.map(u => u.name).sort();
        nombres.forEach(n => console.log(n));
    }
}

// --- Instanciar y conectar botones ---
const endpoint = new DataEnpoint();

document.getElementById("btnNombres").addEventListener("click", () => endpoint.listarNombres());
document.getElementById("btnBasica").addEventListener("click", () => endpoint.buscarInfoBasica());
document.getElementById("btnDireccion").addEventListener("click", () => endpoint.buscarDireccion());
document.getElementById("btnAvanzada").addEventListener("click", () => endpoint.buscarInfoAvanzada());
document.getElementById("btnCompanias").addEventListener("click", () => endpoint.listarCompanias());
document.getElementById("btnOrdenados").addEventListener("click", () => endpoint.listarNombresOrdenados());