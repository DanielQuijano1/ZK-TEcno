const productos = [
    { id: "01", title: "Cable USB", precio: "800", detalle: "Cable Imantado USB V8", img: "./imagenes/cable usb imantado v8.jpg", category: "Cables", stock: 10 },
    { id: "02", title: "Cable USB", precio: "1200", detalle: "Cable USB STARK TIPO C", img: "./imagenes/cable usb STARK type C.jpg", stock: 20, category: "Cables" },
    { id: "03", title: "Auriculares STARK", precio: "1000", detalle: "Auriculares STARK S5830", img: "/imagenes/auriculares STARK S5830 a.webp", stock: 5, category: "Auriculares" },
    { id: "04", title: "Auriculares STARK", precio: "1600", detalle: "Auriculares STARK CJ-11", img: "./imagenes/auriculares stark cj-11.webp", stock: 10, category: "Auriculares" },
    { id: "05", title: "", precio: "", detalle: "", img: "", stock: 0, category: "" },

]

/*
{ id: "", title: "", precio: "", detalle: "", img: "", stock: 0, category: "" },
*/




const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(productos);
        }, 3000);
    });
}

export default obtenerProductos;