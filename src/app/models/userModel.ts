export interface UsersResponse {
    users: User[];
  }
  
  export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
  
    hair: Hair;
    address: Address;
    bank: Bank;
    company: Company;
    crypto: Crypto;
  
    ip: string;
    macAddress: string;
    university: string;
    ein: string;
    ssn: string;
    userAgent: string;
  }
  
  export interface Hair {
    color: string;
    type: string;
  }
  
  export interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
  }
  
  export interface Coordinates {
    lat: number;
    lng: number;
  }
  
  export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  }
  
  export interface Company {
    department: string;
    name: string;
    title: string;
    address: Address;
  }
  
  export interface Crypto {
    coin: string;
    wallet: string;
    network: string;
  }