import { LightningElement ,track, api} from 'lwc';

import getAccounts from '@salesforce/apex/accountController.getAccounts';

export default class lwcSearchAccountCmp extends LightningElement {
    @track name;
    @track number;
    @track accountData=[];
    @track isLoading = false;
    @track error;

    handledChange(event){
        if(event.target.name=="name"){
            this.name=event.target.value;
        }
        else if(event.target.name=="number"){
            this.number=event.target.value;
        }
    }

    handleClick(){
        this.isLoading = true; 
        if(this.name && this.number){
            getAccounts({searchText : this.name, numberOfRecords : this.number})
            .then(result => {
                if(result.length==0){
                    this.error ='There is no records';
                    this.isLoading = false;
                }
                else{
                    var x;
                    for(x in result){
                        this.accountData.push(result[x].Name);
                        this.isLoading = false;
                    }
                }
            })
            .catch(error => {
                this.error = error;
                this.isLoading = false;
            });
        }
        else{
            this.error ='please enter value in the fileds';
            this.isLoading = false;
        }
    }
}