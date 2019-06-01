import { Component, OnInit, Input } from '@angular/core';
import{ FormGroup,FormBuilder,Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor( ) { }

  public Nombre:string;
  public Apellidop:string;
   public Apellidom:string;
   public sexo:string;
   public Edad:string;
   public Correo:string;

   @Input() persona ;


   public aggpersona=function (){
    var validarnumero: RegExp = new RegExp("/^[0-9]+$/");

       if(!validarnumero.test(this.Edad)){
        alert("La edad no es Valida");
        return ;

      }
      

    if(this.validarcorreo()){
        this.persona.push (
       {Nombre:this.Nombre,
        Apellidop:this.Apellidop,
        Apellidom:this.Apellidom,
        sexo:this.sexo,
        Edad:this.Edad,
        Correo:this.Correo,
        icono: Math.round((Math.random()*(10-1)+1))
     

        
        
     
      });


    }    
    

     
     

      
      

   }
   public borrar=function(){
        this.persona.pop();
      }

       
     
     
     
      validarcorreo= function(){
      var filtro = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-])+.([a-zA-Z0-9]{2,4})+$/;
      if(!filtro.test(this.Correo)){
        alert("Correo No Valido");
        return false;

      };
      return true;
     
      

      

      }
     
     
  ngOnInit() {
  }

}

  



