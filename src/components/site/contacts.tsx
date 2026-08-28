import { LeadForm } from "./lead-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { SiteContent } from "@/lib/content";
import { telHref } from "@/lib/utils";

export function Contacts({ content }: { content: SiteContent }) {
  return (
    <section id="contacts" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Контакты</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
            Напишите дату — соберём вечер
          </h2>
          <p className="mt-4 max-w-md text-white/55">
            {content.address}
          </p>
          <div className="mt-8 flex flex-col gap-3 text-lg text-[var(--cream)]">
            <a className="hover:text-[var(--gold)]" href={telHref(content.phone)}>
              {content.phone}
            </a>
            <a className="hover:text-[var(--gold)]" href={`mailto:${content.email}`}>
              {content.email}
            </a>
            <a className="hover:text-[var(--gold)]" href={content.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
          <Button asChild className="mt-8" variant="gold">
            <a href={telHref(content.phone)}>Позвонить сейчас</a>
          </Button>
        </div>
        <Card className="p-6 sm:p-8">
          <h3 className="mb-6 text-xl font-medium text-[var(--cream)]">Оставить заявку</h3>
          <LeadForm />
        </Card>
      </div>
    </section>
  );
}
