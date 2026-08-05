import { ImageResponse } from "next/og";

export const dynamic = "force-static";
import { eczarFont, OG_COLORS, OG_SIZE, OgWheelMark } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "raagawheel — every raga has an address";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: OG_COLORS.night,
          padding: "0 90px",
          fontFamily: "Eczar",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 40, color: OG_COLORS.ivory }}>
            raaga<span style={{ color: OG_COLORS.zariHi }}>wheel</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 84,
              lineHeight: 1.05,
              color: OG_COLORS.ivory,
              maxWidth: 640,
            }}
          >
            Every raga has an address.
          </div>
          <div style={{ display: "flex", marginTop: 30, fontSize: 30, color: OG_COLORS.ivoryMut }}>
            The 72 melakarta ragas of Carnatic music — hear them, see them, decode them.
          </div>
        </div>
        <OgWheelMark size={380} />
      </div>
    ),
    { ...OG_SIZE, fonts: [await eczarFont()] },
  );
}
