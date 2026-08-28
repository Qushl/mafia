import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { ReviewCard } from "@/lib/content";

export function Reviews({ reviews }: { reviews: ReviewCard[] }) {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Отзывы</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">После вечеринки</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${index < review.rating ? "fill-[var(--gold)] text-[var(--gold)]" : "text-white/20"}`}
                />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">{review.text}</p>
            <p className="mt-6 text-sm font-medium text-[var(--cream)]">{review.author}</p>
            {review.eventLabel ? <p className="text-xs text-white/40">{review.eventLabel}</p> : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
