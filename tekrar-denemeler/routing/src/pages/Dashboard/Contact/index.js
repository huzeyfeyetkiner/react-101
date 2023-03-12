import { useFormik } from 'formik';
// useFormik hookunu import etmek için (öncesinde npm i formik / yarn add formik ile kurulması gerekiyor)
import validation from './validation';
import "./style.css"

function Contact() {
  // formik ile beraber gelen yapıları kullanmak için destructing ile beraber içeriden lazım olan yapıları alıyoruz.
  // isSubmitting formun submit edildiği anda true değer, submit edilmediği anda false değer döndürüyor
  // values ile beraber formdan gelen değerlere ulaşılıyor
  // handleBlur ve touched error mesajlarda kullanıcı deneyimini arttırmak için kullanılıyor, kullanıcının ilgili bileşene tıklayıp ayrıldığını takip edebiliyoruz.
  const {handleSubmit, handleChange, values, isSubmitting, errors, handleBlur, touched} = useFormik({
    // initialValues içerisindeki değerler ilgili form bileşeninin name attribute'u ile aynı isme sahip olmalı
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    // values ile beraber formdan gelen tüm verilere ulaşabiliyoruz. bag ise içerisinde formu resetlememizi sağlayan resetForm gibi birçok fonksiyon barındıran ve formik ile beraber gelen bir yapı
    onSubmit: async (values, bag) => {

      // form gönderme süresini simüle etmek için
      await new Promise((r) => setTimeout(r, 1000))

      if (values.email === "test@deneme.com"){
        return bag.setErrors({email: "Bu mail adresi kullanılıyor."})
      }// bu if kod bloğunda backend tarafı simule ediliyor. backende email adresine kayıtlı bir hesap olması durumunda gösterilecek erroru belirtiyoruz.

      alert(JSON.stringify(values, null, 2)); //submit edilen verileri alert ile ekrana getirmek
      console.log(values);
      bag.resetForm()

      
    },
    validationSchema: validation, //yup kütüphanesi ile yazılmış validasyonları formumuzda kullanmak için
  });

  return (
    <div className='form-container'>
      {/* forma submit işlemi yapıldığında işin üstesinden gelmek için */}
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input 
              id="firstName" 
              name="firstName" 
              placeholder="Jane" 
              onChange={handleChange} 
              value={values.firstName}
              disabled={isSubmitting}     
              onBlur={handleBlur}       
            />

            {
              touched.firstName && errors.firstName && <div className='error'>{errors.firstName}</div>
            }
          </div>
          
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input 
              id="lastName" 
              name="lastName" 
              placeholder="Doe" 
              onChange={handleChange} 
              value={values.lastName} 
              disabled={isSubmitting} 
              onBlur={handleBlur}       
            />
            {
              touched.lastName && errors.lastName && <div className='error'>{errors.lastName}</div>
            }
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
              value={values.email}
              disabled={isSubmitting} //submit edildiği anda ilgili bileşeni devre dışı bırakmamızı sağlıyor
              onBlur={handleBlur}       
            />

            {
              touched.email && errors.email && <div className='error'>{errors.email}</div>
            }
          </div>
          
          <div>
            <input
                id="message"
                name="message"
                placeholder="Message"
                type="textarea"
                onChange={handleChange}
                value={values.message}
                disabled={isSubmitting} //submit edildiği anda ilgili bileşeni devre dışı bırakmamızı sağlıyor
                onBlur={handleBlur}      
            />
              {
                touched.message && errors.message && <div className='error'>{errors.message}</div>
              } 
          </div>
          
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting...": "Submit"}</button>
      </form>
    </div>



    
  )
}
export default Contact