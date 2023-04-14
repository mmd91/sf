import { LightningElement, track } from 'lwc';

export default class ComparingNumbers extends LightningElement {
   
    @track num1;
    @track num2;
    @track num3;
    @track message;



handleCalculate(){
    let inputFields=this.template.querySelectorAll('lightning-input');
let num1 = inputFields[0].value;
let num2 = inputFields[1].value;
let num3 = inputFields[2].value;


    if(num1 > num2 && num1 > num3){
        this.message= 'The biggest number is: ' + num1;
    } else if (num2 > num1 && num2 > num3){
        this.message='The biggest number is: ' + num2;
    } else {
        this.message='The biggest number is: ' + num3;
    }

}


handleCancel(){

}



}