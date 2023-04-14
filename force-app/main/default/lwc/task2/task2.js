import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

import { api, LightningElement, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NameField from '@salesforce/schema/Account.Name';
import PhoneField from '@salesforce/schema/Account.Phone';
import CostsField from '@salesforce/schema/Account.Costs__c';

export default class Task2 extends LightningElement {

    /* тож зроби таку ж компоненту для акаунта, ті ж філди, тільки без форми і не в квік екшині 
    а давай на акаунт лайтнінг пейджу її винесемо
в цьому випадку - компонента підтягує дані з рекорда
save - апдейтить акаунт
cancel - має рісетати компоненту, вертати до даних акаунта
 Toast message для success/error випадків і spinner */
    @api recordId;
    @api isLoading = false;

    accountName;
    accountCosts;
    accountPhone;
    
   @wire(getRecord, { recordId: '$recordId', fields: [NameField, PhoneField, CostsField] }) 
   populateAccountFields({data}){


    this.accountName = getFieldValue(data, NameField);
    this.accountCosts = getFieldValue(data, CostsField);
    this.accountPhone = getFieldValue(data, PhoneField);
 
       
  }

    
    handleAccountNameChange(event){
         // Update the account name variable with the new value
        this.accountName = event.target.value;
    }
        

    handleAccountPhoneChange(event){
         // Update the account phone variable with the new value
    this.accountPhone = event.target.value;
    }

    handleAccountCostChange(event){
         // Update the account cost variable with the new value
        this.accountCosts = event.target.value;
    }

   
    
    updateAccount(){
        debugger;
       
        const fields = {};
        fields[NameField.fieldApiName] = this.accountName;
        fields[PhoneField.fieldApiName] = this.accountPhone;
        fields[CostsField.fieldApiName] = this.accountCosts;

        const recordInput = { 
            fields, 
            id: this.recordId };

            updateRecord(recordInput)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account updated successfully.',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                console.error('Error updating account', error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });

    }

    handleCancel(event){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
  
    
  
}