import { LightningElement ,api, track} from 'lwc';

export default class lwcFilterAccountCmp extends LightningElement {
    @api accountData;
    @api isShowCard = false;
    @track searchText;
    @track filteredData=[];

    handleChangeText(event){
       this.searchText = event.target.value;
    }
    handleFilterClick(){
        var x;
        this.isShowCard = false;
        if(this.searchText){
            var data = this.accountData;
            for(x in data){
                if(data[x].includes(this.searchText)){
                    this.filteredData.push(data[x]);
                }
            }
        }
        else{
            this.filteredData = this.accountData;
            this.isShowCard = true;
        }
    }
}