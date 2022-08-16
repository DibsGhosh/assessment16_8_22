export interface user{
    firstName:string;
    middleName:string;
    lastName:string;
    dept: 'IT' | 'HR' | 'Payroll' | 'Networking' | 'Admin';
    gender: 'Male' | 'Female';
    Dob: any;
    address: string;
    pincode: string;
}