import {useFormik} from "formik"
import validationSchema from "./validations"

function SignUp() {
    const {handleChange, handleSubmit, values}= useFormik({
        initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
        },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },
    validationSchema,
});    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            
            <label>Email</label>
            <input type="email" name='email' value={values.email} onChange={handleChange}/>

            <label>Password</label>
            <input type="text" name='password' value={values.password} onChange={handleChange} />

            <label htmlFor="lastName">Confirm Password</label>
            <input type="text" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} />

              

              

              <br /><br />  
             


              <br /><br />

             

              <br /><br />

              <button type="submit">Submit</button>
              <br />
              <br />
              {
                <code>{JSON.stringify(values)}</code>
              }

            </form>
    </div>
  )
}
export default SignUp