const productos = [
    { id: 1, title: "Cable USB", precio: "800", detalle: "Cable Imantado USB V8", img: "/imagenes/cable usb imantado v8.jpg", category: "Cables", stock: 10 },
    { id: 2, title: "Cable USB", precio: "1200", detalle: "Cable USB STARK TIPO C", img: "/imagenes/cable usb STARK type C.jpg", stock: 20, category: "Cables" },
    { id: 3, title: "Auriculares STARK", precio: "1000", detalle: "Auriculares STARK S5830", img: "/imagenes/auriculares STARK S5830 a.webp", stock: 5, category: "Auriculares" },
    { id: 4, title: "Auriculares STARK", precio: "1600", detalle: "Auriculares STARK CJ-11", img: "/imagenes/auriculares stark cj-11.webp", stock: 10, category: "Auriculares" },
    { id: 5, title: "Adaptador HDMI", precio: "1650", detalle: "Adaptador HDMI a VGA", img: "/imagenes/adaptador hdmi a vga.jpg", stock: 1, category: "Adaptadores" },
    { id: 6, title: "Cable AUX", precio: "500", detalle: "Cable AUX 2Mts", img: "/imagenes/cable auxiliar.jpg", stock: 10, category: "Cables" },
    { id: 7, title: "Cable HDMI", precio: "1200", detalle: "Cable HDMI a V8", img: "/imagenes/hdmi a v8.jpg", stock: 2, category: "Cables" },
    { id: 8, title: "Cable Impresora", precio: "500", detalle: "Cable para Impresora 1.5Mts", img: "/imagenes/cable impresora.jpg", stock: 2, category: "Cables" },
    { id: 9, title: "Cable rca", precio: "500", detalle: "Cable RCA 3 a 3 1.5Mts", img: "/imagenes/cable rca 3 a 3.png", stock: 0, category: "Cables" },
    { id: 10, title: "Cable v3", precio: "700", detalle: "Cable V3 con Filtro", img: "/imagenes/cable v3 con filtro.png", stock: 5, category: "Cables" },
    { id: 11, title: "Cable HDMI", precio: "1100", detalle: "Cable HMDI 1.5Mts mallado", img: "/imagenes/HDMI90.jpg", stock: 1, category: "Cables" },
    { id: 12, title: "cable vga", precio: "700", detalle: "Cable VGA c/Filtro 3Mts", img: "/imagenes/VGA3MTS.jpg", stock: 1, category: "Cables" },
    { id: 13, title: "cable vga", precio: "1000", detalle: "Cable VGA c/Filtro 5Mts", img: "/imagenes/VGA.jpg", stock: 1, category: "Cables" },
    { id: 14, title: "OTG tipo C", precio: "600", detalle: "Adaptador OTG Tipo-C", img: "/imagenes/OTG tipo C.jpg", stock: 5, category: "Adaptadores" },
    { id: 15, title: "Parlantes", precio: "1400", detalle: "Mini Parlantes para PC USB NOGA", img: "/imagenes/parlantes pc.jpg", stock: 2, category: "Accesorios PC" },
    { id: 16, title: "Cables AUX", precio: "300", detalle: "Cable Adaptador Auricular", img: "/imagenes/CB1A2.jpg", stock: 5, category: "Cables" },
    { id: 17, title: "Cable RCA", precio: "400", detalle: "Cable Aux a RCA s/bolsita", img: "/imagenes/X_cableaudiorca-aux1-8multra7624.png", stock: 5, category: "Cables" },
    { id: 18, title: "Cable internet", precio: "1000", detalle: "Cable de RED 20Mts", img: "/imagenes/cable internet.jpg", stock: 2, category: "Cables" },
    { id: 19, title: "Adaptador AUX", precio: "1900", detalle: "Cable Jack 3.5mm a USB-C", img: "/imagenes/adaptador-tipo-c-a-aux-jack-3.5-chip-motorola-samsung-huawei.jpg", stock: 5, category: "Adaptadores" },
    { id: 20, title: "Cable PS2", precio: "700", detalle: "Cable PS2 VIDEO", img: "/imagenes/cable ps2.jpg", stock: 2, category: "Cables" },
    { id: 21, title: "CArgador universal", precio: "800", detalle: "Cargador DASH Universal c/LCD", img: "/imagenes/Cargador UNIVERSAL.jpg", stock: 5, category: "Cargadores" },
    { id: 22, title: "cargador inalambrico", precio: "3900", detalle: "Cargador Inalambrico NOGA 5W", img: "/imagenes/NG-Q04.jpg", stock: 1, category: "Cargadores" },
    { id: 23, title: "cargador tipo c", precio: "1200", detalle: "Cargador KOSMO 2A Tipo-C", img: "/imagenes/cargador KOSMO tipo C.jpg", stock: 5, category: "Cargadores" },
    { id: 24, title: "cargador notebook", precio: "4000", detalle: "Cargador Notebook Universal TIME", img: "/imagenes/TMCN901.jpg", stock: 1, category: "Cargadores" },
    { id: 25, title: "Adaptador AUX", precio: "800", detalle: "Adaptador Auxiliar 2 Hembra a 1 Macho", img: "/imagenes/adaptador audio a 3.5mm.jpg", stock: 5, category: "Cables" },
    { id: 26, title: "OTG Tipo V8", precio: "450", detalle: "Adaptador OTG tipo V8", img: "/imagenes/otg v8.jpg", stock: 5, category: "Adaptador" },
    { id: 27, title: "Antena WIFI", precio: "2100", detalle: "Antena WIFI p/PC", img: "/imagenes/usb wireless 802IN.jpg", stock: 2, category: "Accesorios PC" },
    { id: 28, title: "Foco LED Simple", precio: "800", detalle: "Foco Led Simple", img: "/imagenes/lampara led 1.jpg", stock: 2, category: "OTROS" },
    { id: 29, title: "Foco LED Doble", precio: "1400", detalle: "Foco Led Doble", img: "/imagenes/lampara led doble.jpg", stock: 1, category: "OTROS" },
    { id: 30, title: "HUB usb 7 en 1", precio: "1300", detalle: "HUB Usb 7 Puertos en 1", img: "/imagenes/USB 7 en 1.jpg", stock: 1, category: "Accesorios PC" },
    { id: 31, title: "Joystick PS2", precio: "3800", detalle: "Joystick PS2", img: "/imagenes/control PS2.jpg", stock: 1, category: "OTROS" },
    { id: 32, title: "Joystick ps3", precio: "5500", detalle: "Joystick PS3 SONY", img: "/imagenes/Control PS3 Sony.jpg", stock: 1, category: "OTROS" },
    { id: 33, title: "Mousepad 3d", precio: "1400", detalle: "MousePad con Almohadilla de Gel", img: "/imagenes/MOUSEPAD3D.jpg", stock: 2, category: "Accesorios PC" },
    { id: 34, title: "Palo Selfie", precio: "1100", detalle: "Palo Selfie c/Cable Aux", img: "/imagenes/selfie stick.jpg", stock: 1, category: "Accesorios Celulares" },
    { id: 35, title: "Pendrive", precio: "5000", detalle: "Pendrive Sandisk 32BG", img: "/imagenes/pendrive 16gb sandisk.jpg", stock: 2, category: "OTROS" },
    { id: 36, title: "Placa Audio USB", precio: "1000", detalle: "Placa de Audio USB a Jack 3.5mm", img: "/imagenes/placa de sonido usb.jpg", stock: 2, category: "Accesorios PC" },
    { id: 37, title: "REceptor Bluetooth", precio: "800", detalle: "Receptor Bluetooth SUONO", img: "/imagenes/bluetooth 3.5mm.jpg", stock: 2, category: "OTROS" },
    { id: 38, title: "teclado comun", precio: "1700", detalle: "Teclado PC común NOGA", img: "/imagenes/NKB78011.jpg", stock: 2, category: "Accesorios PC" },
    { id: 39, title: "Tira led", precio: "3200", detalle: "Tira LED 28x35 Para Interiores", img: "/imagenes/tira led 28x35.jpg", stock: 1, category: "OTROS" },
    { id: 40, title: "Tira Led", precio: "4600", detalle: "Tira LED 50x50 Para Interiores", img: "/imagenes/tira led 50 x 50.jpg", stock: 1, category: "OTROS" },
    { id: 41, title: "Mouse inalambrico", precio: "1800", detalle: "Mouse Inalambrico NOGA", img: "/imagenes/NGM-05.jpg", stock: 1, category: "OTROS" },
    { id: 42, title: "teclado + mouse gamer", precio: "4500", detalle: "Teclado + Mouse Gamer Inalambrico", img: "/imagenes/NKB-40.jpg", stock: 1, category: "Accesorios PC" },
    { id: 43, title: "Teclado + Mouse comun", precio: "4000", detalle: "Teclado + Mouse", img: "/imagenes/8254.jpg", stock: 1, category: "Accesorios PC" },
    { id: 44, title: "HUB usb 4 en 1", precio: "850", detalle: "Adaptador HUB 4 USB ", img: "/imagenes/10445.jpg", stock: 1, category: "Accesorios PC" },
    { id: 45, title: "CArgador para Auto", precio: "1900", detalle: "Cargador KOSMO 3.3A para Auto con 3 USB", img: "/imagenes/cargador auto kosmo.jpg", stock: 1, category: "Cargadores" },
    { id: 46, title: "cable auxiliar", precio: "500", detalle: "Cable Auxiliar Macho-Hembra 1.5M", img: "/imagenes/10460.jpg", stock: 5, category: "Cables" },
    { id: 47, title: "Cable sata", precio: "400", detalle: "Cable SATA", img: "/imagenes/cable sata.jpg", stock: 5, category: "Cables" },
    { id: 48, title: "HDMI TV", precio: "1500", detalle: "Cable HDMI tv 3 en 1", img: "/imagenes/hdmi 3 en 1.jpg", stock: 1, category: "Cables" },
    { id: 49, title: "CHip", precio: "200", detalle: "Chips Personal, Claro, Tuenti", img: "/imagenes/chip.jpg", stock: 100, category: "Accesorios Celulares" },
]

/*
{ id: "", title: "", precio: "", detalle: "", img: "./imagenes/", stock: 0, category: "" },
*/




const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
}


const obtenerProducto = (idProducto) => {
    return new Promise((resolve, reject) => {
        let itemRequerido = productos.find((item) => { return (item.id === Number(idProducto)) })
        setTimeout(() => {
            if (itemRequerido) resolve(itemRequerido);
            else  reject("No se encontró el producto buscado")
        }, 200);
    });
}

const obtenerProductoPorCategoria = ( categoriaURL) => {
    return new Promise((resolve, reject) => {
        let productoRequerido = productos.filter(producto => producto.category === categoriaURL);
        console.log(categoriaURL)
        setTimeout(() => {
            if (productoRequerido) resolve(productoRequerido);
            else  reject("No se encontró el producto buscado")
        }, 1000);
    });
}



export default obtenerProductos;

export { obtenerProducto , obtenerProductoPorCategoria };
