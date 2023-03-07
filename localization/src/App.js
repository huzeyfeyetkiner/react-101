import { useState, useEffect } from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl'
import './App.css';


const messages = {
  "tr-TR": { message1 : "Hoşgeldiniz!", message2: "{count} yeni mesajınız var" },
  // {count} ile beraber aşağıda parametre olarak gönderilen verileri mesaj için kullandım.
  "en-US": { message1 : "Welcome!", message2: "you have {count} new messages"},  
}

function App() {

  const lang = navigator.language;

  const [locale, setLocale] = useState(localStorage.getItem("locale") ? localStorage.getItem("locale") : lang)

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <p>
          <FormattedMessage id="message1" />
        </p>

        <p>
          {/* values adı altında ilgili mesaj içerisine parametre gönderebiliyoruz. aşağıda values adı altında count keyiyle parametre gönderiyorum ve mesaj içeriğinde o parametreyi kullanıyorum. */}
          <FormattedMessage id="message2" values={{count: 15}}/>
        </p>
        
      </IntlProvider>

      <hr />

      <button onClick={() => setLocale("tr-TR")}>TR</button>
      <button onClick={() => setLocale("en-US")}>EN</button>
    </div>
    


  );
}

export default App;
