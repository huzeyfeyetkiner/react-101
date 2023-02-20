import {useFormik} from "formik"
import validationSchema from "./validations"

function SignUp() {
    const {handleChange, handleSubmit, handleBlur, touched, values, errors}= useFormik({
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
            
            <div>Email</div>
            <input type="email" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}/>
            { errors.email && touched.email && ( <div className="error">{errors.email}</div> ) }

            <div>Password</div>
            <input type="text" name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} />
            { errors.password && touched.password && ( <div className="error">{errors.password}</div> ) }

            <div htmlFor="lastName">Confirm Password</div>
            <input type="text" name='confirmPassword' value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange} />
            { errors.confirmPassword && touched.confirmPassword && ( <div className="error">{errors.confirmPassword}</div> ) }

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