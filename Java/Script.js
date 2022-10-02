var ojos=   document.getElementsByClassName("Ojos");
var Pos_x=0;
var Pos_y=0;
var Oj_Pox_x=[0,0];
var Oj_Pox_y=[0,0];
for (i=0; i< ojos.length; i++)
{
    Oj_Pox_x[i]= ojos[i].getBoundingClientRect().left ;
    Oj_Pox_y[i]= ojos[i].getBoundingClientRect().top ;
}
window.addEventListener("mousemove",(e)=>{
    Pos_x=e.pageX;
    Pos_y=e.pageY;
    for (i=0;i<ojos.length;i++){
        let distancia = Math.sqrt(Math.pow(Oj_Pox_x[i]-Pos_x,2) + Math.pow(Oj_Pox_y[i]-Pos_y,2))
        let direccion= [6*(Pos_x-Oj_Pox_x[i])/distancia,6*(Pos_y-Oj_Pox_y[i])/distancia ]
        ojos[i].style.transform= "translate("+ direccion[0].toString()+ "px,"+ direccion[1].toString()+"px)";  
    }
})

 
