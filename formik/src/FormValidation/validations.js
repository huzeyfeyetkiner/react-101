import { object, string, number, date, InferType, ref } from 'yup';

const validations = object({    
    email: string().email("E-mail must be valid").required("Required"),
    password: string().min(5,"Minimum 5").required(),
    confirmPassword: string().oneOf([ref("password")],"passwords are not matching").required()
    
  });

export default validations