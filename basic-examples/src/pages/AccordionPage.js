import  Accordion  from "../components/Accordion.js"



function AccordionPage() {

    const questions = [
        {
            title: "ÖSYM Aday İşlemleri Sistemi (AİS) şifresi olmayan adaylar, bireysel olarak elektronik ortamda 2023-YKSye başvuru yapabilirler mi?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eligendi dicta dolorem, similique ducimus modi odit unde ipsam numquam quae mollitia, architecto, perspiciatis sed dolorum blanditiis quod doloremque doloribus iure sequi obcaecati soluta officia nostrum harum asperiores! Tenetur, dolorum minus! Officia modi tenetur perferendis vero quasi eaque exercitationem sint ipsam?"
        },
        {
            title: "ÖSYM Başvuru Merkezlerine gitmeden 2023-YKS’ye başvuru yapmak mümkün mü?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, officiis laboriosam eius, vel fugit vitae dolor amet doloribus rem impedit quasi labore placeat praesentium culpa ratione architecto magni saepe odit?"
        },
        {
            title: "ÖSYM Aday İşlemleri Sisteminde (AİS) güncel fotoğrafı olmayan adaylar 2023-YKS’ye başvuru yapabilirler mi?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem reiciendis facilis repellendus eum neque rerum fugit, natus ad, sequi iure, omnis pariatur numquam quia quos minima alias. Eligendi quia perspiciatis deserunt repudiandae, fugiat amet fuga ducimus explicabo ea numquam, aliquid quo, facilis pariatur dicta porro veniam consequatur magnam? Corporis beatae sed, consequuntur veniam adipisci quia. Neque tempora ex officia beatae."
        },
        {
            title: "ÖSYM Mobil uygulamasından 2023-YKS başvurusu yapılabilir mi?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto ipsum dignissimos ipsam itaque. Neque dolores cupiditate, nostrum natus blanditiis at ullam mollitia vero provident id quis autem eaque laborum fuga alias quo maxime necessitatibus sed sapiente nulla pariatur suscipit? Ad odio placeat mollitia sunt!"
        },
    ]

  return (
    <div>

        {
        questions.map((question, index) => {
            return(
                <Accordion key={index} title={question.title} answer={question.answer}/>
            )
        })
        }
        

    </div>
  )
}
export default AccordionPage