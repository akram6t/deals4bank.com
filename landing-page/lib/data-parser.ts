// src/utils/dataParser.ts
import data from '@/data/data.json';

export const getCompanyData = () => {
    return data.company;
};

export const getContactData = () => {
    return data.contacts;
};

export const getServiceData = () => {
    return data.services;
};

export const getMailUri = (): string => {
    const { email } = getContactData();
    const mailtoUrl = `mailto:${email.address}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`;
    return mailtoUrl;
};

export const getWhatsappUri = (): string => {
    const { whatsapp } = getContactData();
    return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.text)}`;
};

// Add this to your existing dataParser.ts
export const getStatesData = () => {
    return data.states;
};