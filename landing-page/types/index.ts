export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  pincode: string;
  serviceType: 'insurance' | 'loans' | 'investment' | '';
  subService: string;
  additionalInfo: string;
}

export interface ServiceOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FormErrors {
  [key: string]: string;
}