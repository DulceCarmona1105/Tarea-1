const app= new Vue({
    el: "#clases",
    data:{
        NuevoNombre: '',
        NuevoCantidad:'',
        NuevoPrecio:'',
        nom:'',
        pre:'',
        productos:[
            {nombre: "Frappé Matcha", ingrediente: "Matcha", tamaño: "CH", precio:30, vigente: true,foto:'img/Matcha.jpg'},
            {nombre: "Café Americano", ingrediente: "Café (caliente)", tamaño: "CH", precio:25, vigente: false,foto:'img/am.jpg'},
            {nombre: "Cappuccino", ingrediente: "Café, caramelo y leche (caliente)", tamaño: "M", precio:40, vigente: true,foto:'img/cap.jpg'},
            {nombre: "Frappé Oreo", ingrediente: "Leche y Oreo (frío)", tamaño: "CH", precio:50, vigente: true,foto:'img/frapo.jpeg'},
            {nombre: "Té Helado", ingrediente: "Té (frío)", tamaño: "CH", precio:45, vigente: true,foto:'img/te.jpg'},
            {nombre: "Frappuccino", ingrediente: "Café, caramelo y leche (frío)", tamaño: "CH", precio:35, vigente: true,foto:'img/frapu.jpg'},
        ],
        busqueda: '',
        minimo:50,
        busqueda2: '',
    },
    methods:{
        agregar: function(){
            
                this.nom.push(this.nombre);
                this.pre.push(this.precio);
            
        }, 
    },
    computed:{
        busqprecio(){
            return this.productos.filter((producto)=>producto.precio<=this.minimo);
        },
        productosTotales(){
            let pt=0;
            for (i=0; i <this.productos.length; i++) {
                pt = pt+(this.productos[i].cantidad)
            }
            return pt;
        },
        subtotal(){
            let s=0;
            for(i=0; i<this.productos.length; i++){
                s = s+(this.productos[i].cantidad*this.productos[i].precio)
            }
            return s;
        },
        iva(){
            let i=0;
            i=this.subtotal*.16;
            return i;
        },
        tot(){
            let t=0;
            t=this.subtotal+this.iva;
            return t;
        },
        buscarProducto(){
            return this.productos.filter((producto)=>producto.nombre.includes(this.busqueda));
        },
        buscarProducto2(){
            if (this.busqueda2<=this.productos.precio) {
                return this.productos.filter((producto)=>producto.nombre.includes(this.busqueda2));
            }
            
        },
        productosEncontrados(){
            return this.buscarProducto.length;
        },
    },
});