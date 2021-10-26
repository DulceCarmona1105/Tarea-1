const app= new Vue({
    el: "#clases",
    data:{
        NuevoNombre: '',
        NuevoCantidad:'',
        NuevoPrecio:'',
        productos:[
            {nombre: "Suplemento G", cantidad: 8, precio: 200},
            {nombre: "Proteína de Fresa", cantidad: 3, precio: 80},
            {nombre: "Multivitanínico", cantidad: 5, precio: 300},
        ],
        minimo:5,
        busqueda: '',
    },
    methods:{
        agregar: function(){
            if(this.NuevoNombre && this.NuevoCantidad && this.NuevoPrecio){
                this.productos.push({nombre:this.NuevoNombre, cantidad:this.NuevoCantidad, precio:this.NuevoPrecio});
                this.NuevoNombre='';
                this.NuevoCantidad='';
                this.NuevoPrecio='';
            }
        },
    },
    computed:{
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
    },
});