public class accountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchText, Integer numberOfRecords){
        String searchedName = '%' + searchText +'%';
        return [select id,name from Account where name LIKE : searchedName LIMIT :numberOfRecords];
    }
}