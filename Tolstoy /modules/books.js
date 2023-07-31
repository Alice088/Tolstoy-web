 export const books = {
  book_cover: document.querySelector(`#book-сover`),
  book_description: document.querySelector(`.Famous-works__booksDescription`),

  War_and_Peace: {
    id: document.querySelector(`#book-1`),
    src: `Image/book/War-Peace.webp`,
    alt: `War-and-Peace-book`,
    text: `«Война́ и мир» — роман-эпопея Льва Николаевича Толстого, описывающий
      русское общество в эпоху войн против Наполеона
      в 1805—1812 года. Эпилог романа доводит повествование до 1820 года.`
  },

  Childhood_Adolescence_Adolescence: {
    id: document.querySelector(`#book-2`),
    src: `Image/book/childhood-young.webp`,
    alt: `Childhood-Adolescence-Adolescence-book`, 
    text: `Знаменитая автобиографическая трилогия "Детство. Отрочество. Юность",
      основанная на реальных событиях, повествует о становлении личности ребенка, проблеме
      самоопределения, установления взаимоотношений с внешним миром.`
  },

  Caucasian_prisoner: {
    id: document.querySelector(`#book-3`), 
    src: `Image/book/Caucasian prisoner .jpg`, 
    alt: `Caucasian-prisoner-book`, 
    text: `«Кавка́зский пле́нник» — рассказ (иногда называется повестью) Льва Толстого, повествующий о русском
      офицере в плену у горцев. Написан для «Азбуки», впервые опубликован в 1872 году в журнале «Заря».
      Одно из наиболее популярных произведений писателя, многократно переиздававшееся и входящее в школьную программу`
  },

  Sevastopol_stories: {
    id: document.querySelector(`#book-4`), 
    src: `Image/book/Sevastopol stories.webp`, 
    alt: `Sevastopol-stories-book`, 
    text: `«Севастопольские рассказы» — цикл из трёх рассказов, написанных Львом Толстым и опубликованных
      в 1855 году. Рассказы описывают оборону Севастополя. Толстой пишет как о героизме защитников города, так
      и о бесчеловечной бессмысленности войны.`
  },

  Anna_Karenina: {
    id: document.querySelector(`#book-5`), 
    src: `Image/book/Anna Karenina.jpg`, 
    alt: `Anna-Karenina-book`, 
    text: `«А́нна Каре́нина» — роман Льва Толстого о трагической любви замужней
      дамы Анны Карениной и блестящего офицера Алексея Вронского на фоне счастливой
      емейной жизни дворян Константина Лёвина и Кити Щербацкой.`
  },
};

Object.defineProperty(books, `book_cover`, {
   enumerable: false 
});

Object.defineProperty(books, `book_description`, {
   enumerable: false
});