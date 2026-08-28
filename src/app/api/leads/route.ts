import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCms } from "@/lib/payload";
import { notifyTelegram } from "@/lib/telegram";
import { leadSchema } from "@/lib/lead-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message || "Проверьте поля" },
        { status: 400 },
      );
    }

    const { name, phone, eventType, date, comment, company } = parsed.data;
    if (company) {
      return NextResponse.json({ ok: true });
    }

    const eventDate = date ? new Date(date) : null;
    const safeDate = eventDate && !Number.isNaN(eventDate.getTime()) ? eventDate : null;

    await prisma.lead.create({
      data: {
        name,
        phone,
        eventType,
        eventDate: safeDate,
        comment: comment || null,
      },
    });

    try {
      const payload = await getCms();
      await payload.create({
        collection: "leads",
        overrideAccess: true,
        data: {
          name,
          phone,
          eventType,
          eventDate: safeDate?.toISOString(),
          comment: comment || undefined,
          status: "new",
        },
      });
    } catch (error) {
      console.error("Payload lead create failed", error);
    }

    await notifyTelegram(
      [
        "<b>Новая заявка · Полночь</b>",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Формат: ${eventType}`,
        safeDate ? `Дата: ${safeDate.toLocaleDateString("ru-RU")}` : "Дата: не указана",
        comment ? `Комментарий: ${comment}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead API error", error);
    return NextResponse.json({ ok: false, error: "Не удалось отправить заявку" }, { status: 500 });
  }
}
