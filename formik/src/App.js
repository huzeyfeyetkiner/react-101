import './App.css';
// import { Formik, Form, Field } from 'formik'; Fiel yapısını kullanmak istemediğimizden yorum satırına alındı
import { Formik, Form } from 'formik';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
      initialValues={{
        firstName: 'Huzeyfe',
        lastName: 'Yetkiner',
        email: 'yetkinerhuzeyfe@gmail.com',
        gender: 'male',
        hobbies: [],
        country: "Turkey",
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >

      {
        // Formik yapısının bize sağldaığı Field elementini kullanmak yerine input gibi basit html etiketlerini kullanmak istediğimizde Formik yapısı ile beraber gelen handleSubmit ve handleChange ile state işlemlerini daha kolay bir şekilde gerçekleştirebiliyoruz.
        ( {handleSubmit, handleChange, values} ) => {
          return (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name='firstName' value={values.firstName} onChange={handleChange} />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" name='lastName' value={values.lastName} onChange={handleChange} />

              <label htmlFor="email">Email</label>
              <input type="email" name='email' value={values.email} onChange={handleChange}/>

              <br /><br />

              <label htmlFor="">Gender</label> <br />
              <span>Male</span>
              <input type="radio" name='gender' value={"male"} onChange={handleChange} checked={values.gender === "male"}/>
              <span>Female</span>
              <input type="radio" name='gender' value={"female"} onChange={handleChange} checked={values.gender === "female"}/>

              <br /><br />  
              <div>
                <span>Football</span>
                <input type="checkbox" name="hobbies" value={"Football"} onChange={handleChange}/> <br />
                <span>PC Games</span>
                <input type="checkbox" name="hobbies" value={"PC Games"} onChange={handleChange}/> <br />
                <span>Cinema</span>
                <input type="checkbox" name="hobbies" value={"Cinema"} onChange={handleChange}/>
              </div>


              <br /><br />

              <select name="country" onChange={handleChange} value={values.country}>                
                <option value="Spain">Spain</option>
                <option value="Turkey">Turkey</option>
                <option value="Holland">Holland</option>
              </select>

              <br /><br />

              <button type="submit">Submit</button>
              <br />
              <br />
              {
                <code>{JSON.stringify(values)}</code>
              }

            </Form>
          )
        }
        
      }
      
    </Formik>
    </div>
  );
}

export default App;


// formik ile beraber gelen Field ve Form yapılarıyla beraber basit kullanımı
{/* <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik> */}