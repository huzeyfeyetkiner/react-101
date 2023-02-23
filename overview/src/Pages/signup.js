import { useFormik } from 'formik';
import validationSchema from '../validations/validation';

function Signup() {

  const {errors, values, handleSubmit, handleChange, handleBlur, touched} = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      email: "",
      password:"",
      confirmPassword: "",
      gender:"",
    },
    onSubmit: values => {
       alert(JSON.stringify(values, null, 2));        
       
    },
    validationSchema
  })
  console.log(errors);
  return (
    <div className='form-container'>

      <form onSubmit={handleSubmit} action="">
        <div className="col-1">
          <span>Name:</span>
          <input name='firstName' value={values.firstName} type="text" onChange={handleChange} onBlur={handleBlur}/>
          { errors.firstName && touched.firstName &&
            <span className='error'>{errors.firstName}</span>
          }
          <span>Surname:</span>
          <input name='surName' value={values.surName} type="text" onChange={handleChange}/>
          { errors.surName && touched.surName &&
            <span className='error'>{errors.surName}</span>
          }
        </div>
        <div className="col-2">
          <span>Email:</span>
          <input name='email' value={values.email} type="email" onChange={handleChange}/>
          { errors.email && touched.email && 
            <span className='error'>{errors.email}</span>
          }
          <span>Gender:</span>
          <select name="gender" value={values.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          { errors.gender && touched.gender && 
            <span className='error'>{errors.gender}</span>
          }
        </div>
        <div className="col-3">
          <span>Password:</span>
          <input name='password' type="password" value={values.password} onChange={handleChange}/>
          { errors.password && touched.password && 
            <span className='error'>{errors.password}</span>
          }
          <span>Confirm password:</span>
          <input name='confirmPassword' type="password" value={values.confirmPassword} onChange={handleChange}/>
          { errors.confirmPassword && touched.confirmPassword &&
            <span className="error">{errors.confirmPassword}</span>
          }
        </div>

        <button>Submit</button>

      </form>

    </div>
  )
}
export default Signup