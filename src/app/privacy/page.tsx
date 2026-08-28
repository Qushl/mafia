import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных",
  description: "Политика обработки персональных данных агентства «Полночь».",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-24 text-white/70 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Документы</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
          Политика обработки персональных данных
        </h1>
        <div className="mt-10 space-y-6 text-base leading-8">
          <p>
            Настоящая политика описывает обработку персональных данных на сайте агентства «Полночь».
          </p>
          <h2 className="text-xl font-medium text-[var(--cream)]">Какие данные мы собираем</h2>
          <p>
            При отправке заявки мы можем получить имя, номер телефона, тип мероприятия, желаемую дату и комментарий.
          </p>
          <h2 className="text-xl font-medium text-[var(--cream)]">Цель обработки</h2>
          <p>
            Данные используются только для связи с вами, уточнения деталей и обработки заявки на проведение мероприятия.
          </p>
          <h2 className="text-xl font-medium text-[var(--cream)]">Хранение и передача</h2>
          <p>
            Данные хранятся столько, сколько необходимо для обработки заявки и исполнения связанных с ней обязательств.
            Мы не передаём персональные данные третьим лицам, кроме случаев, предусмотренных законодательством РФ.
          </p>
          <h2 className="text-xl font-medium text-[var(--cream)]">Ваши права</h2>
          <p>
            Вы можете запросить уточнение, удаление или прекращение обработки своих данных, обратившись по адресу
            hello@polnoch.agency.
          </p>
        </div>
      </article>
    </main>
  );
}