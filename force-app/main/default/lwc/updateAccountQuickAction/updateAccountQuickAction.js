/* Created by mariamalets on 28.02.2023.
 */

import { LightningElement, api } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

import Cancel_Button from '@salesforce/label/c.Cancel_Button';
import Save_Button from '@salesforce/label/c.Cancel_Button';


export default class Task1 extends LightningElement {
    @api recordId;
    @api Account;

    label = {
      Cancel_Button,
      Save_Button
   };
   

    handleSuccess(event){
        this.dispatchEvent(new CloseActionScreenEvent());
     }

     handleCancel(event){
        this.dispatchEvent(new CloseActionScreenEvent());
     }


    }