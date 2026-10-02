import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f8f6f1",
          color: "#1f1d1a",
          backgroundImage:
            "linear-gradient(to right, rgba(31,29,26,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,29,26,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2, color: "#77736b" }}>
          <span>AZIZ.DEV</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 12, height: 12, borderRadius: 12, background: "#3fae6a" }} />
            OPEN TO WORK
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1, letterSpacing: -2, fontWeight: 600 }}>{profile.name}</div>
          <div style={{ fontSize: 44, marginTop: 20, color: "#77736b" }}>{profile.headline}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#77736b" }}>
          {["React", "Next.js", "TypeScript", "Node.js", "React Native"].map((t) => (
            <span key={t} style={{ border: "1px solid #ddd8cc", borderRadius: 999, padding: "8px 20px" }}>
              {t}
            </span>
          ))}
          <span style={{ marginLeft: "auto", color: "#e0663a" }}>{profile.location}</span>
        </div>
      </div>
    ),
    size,
  );
}
