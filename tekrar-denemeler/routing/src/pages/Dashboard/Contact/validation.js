import { object, string } from 'yup';
// form için yaptığım validasyon kontrolleri
const ContactSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  message: string().min(5).required(),
});

export default ContactSchema