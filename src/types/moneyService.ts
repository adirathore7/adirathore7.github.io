
export const ServiceTypes = {
  BILL: 'Pay a Bill',
  TRANSFER: 'Transfer between Accounts',
  ZELLE: 'Zelle',
}

export type ServiceType = typeof ServiceTypes[keyof typeof ServiceTypes];

export interface MoneyService {
    id: string;
    name: ServiceType;
    description: string;
}