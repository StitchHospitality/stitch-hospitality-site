import { ImageResponse } from "next/og";

export const alt = "The GM Ownership Report OS by Stitch Hospitality";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#071f1b",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff6464",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#ff6464",
              fontWeight: 600,
              display: "flex",
            }}
          >
            Designed for USALI 12th Edition
          </div>
        </div>

        <div
          style={{
            fontSize: 72,
            lineHeight: 1.1,
            color: "#ffffff",
            fontWeight: 700,
            display: "flex",
            maxWidth: 980,
          }}
        >
          The GM Ownership Report OS
        </div>

        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.6)",
            marginTop: 28,
            display: "flex",
            maxWidth: 880,
          }}
        >
          Playbook, workbook, template &amp; prompts — by a sitting hotel GM
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 64,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 600,
              display: "flex",
            }}
          >
            Stitch Hospitality
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
