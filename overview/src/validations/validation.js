import { object, string, ref } from 'yup';

const validations = object({
    firstName: string().required("değer girmelisiniz"),
    surName: string().required("değer girmelisiniz"),
    email: string().email("geçerli bir mail girin").required("değer girmelisiniz"),
    password: string().min(7).required("değer girmelisiniz"),
    confirmPassword: string().oneOf([ref("password")]).required("değer girmelisiniz"),
    gender: string().required(),
  });

export default validations