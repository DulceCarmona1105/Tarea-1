new Vue({
    el:'#seccion',
    data:{
        aparecerSI:false,
        aparecerNO: false,
        respuesta: '',
        exmo: '',
        moex: '',
        años:'',
        l:'',
        ls: [],
        datos:[]
    },
    methods:{
        mostrar:function(){
            if (this.respuesta=="SI") {
                this.aparecerSI =true;
                this.aparecerNO=false;
            }
            else if (this.respuesta=="NO") {
                this.aparecerNO=true;
                this.aparecerSI=false;
            }
        },
        ap: function(){
            if (this.años < 2){ 
                this.exmo="¿Qué te motiva a programar?";
            }
            else{
                this.exmo="Cuéntanos tu experiencia programando: ";
            }
        },
        agregar(){
            this.ls.push(this.l);
            this.l='';
        }, 
        enviarform(){
            this.datos.push("Le gusta programar? "+this.respuesta);
            this.datos.push("Años que lleva programando: "+this.años);
            this.datos.push(this.exmo+" "+this.moex);
            this.datos.push("Lenguaje que conoce: "+this.ls)
        }
    }
});