import { ContactInfo } from '../../contactInfo/entity/contactInfo.entity';

export class User {
  uidx: number;

  email: string;

  name: string;

  profileImagePath: string;

  level: string;

  accessToken: string;

  contactInfo: ContactInfo;
}
