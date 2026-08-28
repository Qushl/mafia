export type HostCard = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
};

export type TariffCard = {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
};

export type EventTypeCard = {
  id: string;
  title: string;
  audience: "kids" | "birthday" | "corporate";
  description: string;
  photoUrl: string;
};

export type ReviewCard = {
  id: string;
  author: string;
  rating: number;
  text: string;
  eventLabel: string;
};

export type GalleryCard = {
  id: string;
  title: string;
  caption: string;
  photoUrl: string;
};

export type SiteContent = {
  brand: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  phone: string;
  email: string;
  telegram: string;
  address: string;
  heroImageUrl: string;
  seoTitle: string;
  seoDescription: string;
  hosts: HostCard[];
  tariffs: TariffCard[];
  eventTypes: EventTypeCard[];
  reviews: ReviewCard[];
  gallery: GalleryCard[];
};

export const fallbackContent: SiteContent = {
  brand: "Полночь",
  heroKicker: "Агентство игровых вечеров",
  heroTitle: "Вечер, после которого в чате ещё неделю разбирают, кто был мафией",
  heroSubtitle:
    "Мафия, квизы и корпоративы под ключ: сценарий, ведущие, реквизит и атмосфера. Вы зовёте людей — мы держим зал.",
  heroCta: "Оставить заявку",
  phone: "+7 (495) 120-13-00",
  email: "hello@polnoch.agency",
  telegram: "https://t.me/polnoch",
  address: "Москва · выезд по России",
  heroImageUrl:
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2400&q=80",
  seoTitle: "Полночь — мафия, квизы и корпоративы",
  seoDescription:
    "Агентство развлекательных мероприятий: мафия, квизы, дни рождения и корпоративы. Ведущие, сценарий и атмосфера под ключ.",
  hosts: [
    {
      id: "1",
      name: "Кира Волкова",
      role: "Ведущая мафии",
      bio: "Держит стол без крика и панибратства. Игроки забывают, что это постановка.",
      photoUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "2",
      name: "Марк Елисеев",
      role: "Квиз-мастер",
      bio: "Пакеты вопросов под индустрию заказчика. Юмор точный, без «капустника».",
      photoUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "3",
      name: "Аля Чернова",
      role: "Детские программы",
      bio: "Сценарии 7–14 лет: интрига есть, страха нет. Родители остаются в зале.",
      photoUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "4",
      name: "Илья Разумов",
      role: "Корпоративы",
      bio: "Связывает игру с задачами HR: знакомство отделов, без форс-тимбилдинга.",
      photoUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    },
  ],
  tariffs: [
    {
      id: "1",
      title: "Стол",
      price: "18 000 ₽",
      period: "час",
      description: "Камерная мафия или мини-квиз для гостиной и лофта.",
      features: ["1 ведущий", "Реквизит и сценарий", "До 12 гостей", "Выезд по Москве"],
      featured: false,
    },
    {
      id: "2",
      title: "Зал",
      price: "64 000 ₽",
      period: "пакет",
      description: "Полный вечер: игра, свет, вход гостей, тайминг под банкет.",
      features: [
        "2 ведущих",
        "Мафия или квиз на 2,5 часа",
        "До 40 гостей",
        "Звук / микрофоны",
        "Координация с площадкой",
      ],
      featured: true,
    },
    {
      id: "3",
      title: "Резиденция",
      price: "от 140 000 ₽",
      period: "пакет",
      description: "Корпоратив или юбилей: несколько зон, кастомный сюжет.",
      features: [
        "Команда 3–5 человек",
        "Авторский сценарий",
        "До 120 гостей",
        "Брендирование и фотозона",
        "Режиссёр вечера",
      ],
      featured: false,
    },
  ],
  eventTypes: [
    {
      id: "1",
      title: "Детские вечера",
      audience: "kids",
      description: "Детектив без жестокости, роли по возрасту, тайминг, который не утомляет.",
      photoUrl:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "2",
      title: "Дни рождения",
      audience: "birthday",
      description: "Именинник в центре сюжета. Не аниматор с шарами — вечер в ритме клуба.",
      photoUrl:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "3",
      title: "Корпоративы",
      audience: "corporate",
      description: "Квиз под ваш рынок, мафия для отделов, формат, который не стыдно снять на видео.",
      photoUrl:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    },
  ],
  reviews: [
    {
      id: "1",
      author: "Екатерина Л.",
      rating: 5,
      text: "Юбилей на 30 человек. Никто не смотрел в телефон. Ведущая собрала даже тех, кто «просто постоять».",
      eventLabel: "День рождения",
    },
    {
      id: "2",
      author: "Павел, HR Tech",
      rating: 5,
      text: "Квиз под продукт компании. Вопросы были не из пакета «столица Австралии». Команда до сих пор цитирует раунды.",
      eventLabel: "Корпоратив",
    },
    {
      id: "3",
      author: "Марина С.",
      rating: 5,
      text: "Детская мафия для 11-леток. Страшно не было, скучно тоже. Родители сидели в баре и не забирали детей раньше.",
      eventLabel: "Дети",
    },
  ],
  gallery: [
    {
      id: "1",
      title: "Закрытый стол · лофт на Павелецкой",
      caption: "12 игроков, живой оркестр в антракте",
      photoUrl:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "2",
      title: "Квиз для финтеха",
      caption: "4 команды, финал по метрикам продукта",
      photoUrl:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "3",
      title: "Ночь мафии в ресторане",
      caption: "Банкет + две партии без пауз",
      photoUrl:
        "https://images.unsplash.com/photo-1541532713592-8f8a1688d6d0?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "4",
      title: "Детский детектив",
      caption: "Загородный дом, 14 гостей",
      photoUrl:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1400&q=80",
    },
  ],
};
