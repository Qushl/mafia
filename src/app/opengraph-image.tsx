import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#08080a",
          padding: 72,
        }}
      >
        <div style={{ color: "#c4a574", fontSize: 22, letterSpacing: 10, textTransform: "uppercase" }}>Полночь</div>
        <div style={{ color: "#f4efe6", fontSize: 64, fontWeight: 600, marginTop: 16, lineHeight: 1.1 }}>
          Мафия, квизы, корпоративы
        </div>
      </div>
    ),
    size,
  );
}
