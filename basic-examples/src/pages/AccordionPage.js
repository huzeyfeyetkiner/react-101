import Accordion from "../components/Accordion"


function AccordionPage() {

    const questions = [
        {
            title: "Yeni Koronavirüs (SARS-CoV-2) nedir?",
            answer: "Yeni Koronavirüs (SARS-CoV-2) ilk olarak Çin’in Vuhan şehrinde tespit edilen ve  solunum yolu enfeksiyonu yapan bir virüstür; COVID-19’a sebep olur. Bu hastalık yüksek ateş, öksürük, nefes darlığı, baş ağrısı, boğaz ağrısı, burun akıntısı, kas ve eklem ağrısı, halsizlik, koku ve tat alma duyusu kaybı, ishal gibi belirtilerle kendini gösterir."
        },
        {
            title: "COVID-19 nasıl bulaşır?",
            answer: "COVID-19, hasta kişilerin öksürme, hapşırma veya konuşmayla ortaya saçtığı damlacıkların ortamdaki diğer bireyler tarafından solunması, damlacıkların yapıştığı yüzeylere dokunduktan sonra ellerin ağız, burun veya göze götürülmesiyle bulaşır."
        },
        {
            title: "COVID-19'un tanısı nasıl konulur?",
            answer: "Kesin tanı moleküler testlerle konulmaktadır. Bu testler kişiden alınan boğaz ve/veya burun sürüntüsünde virüsün genetik materyalinin aranması prensibine dayanır. Ülkemizde tanı PCR testi ile konulmaktadır."
        }
    ]


  return (
    <div>
        {
            questions.map((question, index) => {
                return(
                    <Accordion key={index} title={question.title} answer={question.answer} />
                )
            })
        }
       
    </div>
  )
}
export default AccordionPage