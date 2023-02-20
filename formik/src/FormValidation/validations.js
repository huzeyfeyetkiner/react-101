import { object, string, number, date, InferType, ref } from 'yup';

const validations = object({    
    email: string().email().required(),
    password: string().min(5).required(),
    confirmPassword: string().oneOf([ref("password")]).required()
    
  });

export default validations