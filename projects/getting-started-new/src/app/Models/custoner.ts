export interface Customer {
    //custumer information
    lastName :string;
    firstName :string;   
    email:string;    
    city :string;
    phone:string;
    sex:string;
    address:string;
    idNumber:number;
    groups:Groups[];
    id:string;
}
export interface Groups{
    group:string;
}
export interface Citys{
    name:string;
    customers:Customer[];
}