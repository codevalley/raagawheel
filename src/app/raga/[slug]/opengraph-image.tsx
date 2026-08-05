import { ImageResponse } from "next/og";

export const dynamic = "force-static";
import { allRagas, ragaBySlug } from "@/data";
import { SEMITONE } from "@/lib/carnatic/types";
import { melaFamilyHex } from "@/lib/carnatic/color";
import { eczarFont, OG_COLORS, OG_SIZE, OgSeal } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";

export const alt = "Raga card — raagawheel";

export function generateStaticParams() {
  return allRagas.map((r) => ({ slug: r.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const raga = ragaBySlug.get(slug);
  if (!raga) return new ImageResponse(<div style={{ display: "flex" }} />, OG_SIZE);

  const familyMela = raga.kind === "melakarta" ? raga.melaNumber : raga.parentMelaNumber;
  const accent = melaFamilyHex(familyMela);
  const eyebrow =
    raga.kind === "melakarta"
      ? `MELA ${raga.melaNumber} · ${raga.chakra.name.toUpperCase()} CHAKRA · M${raga.melaNumber <= 36 ? 1 : 2}`
      : `JANYA OF MELA ${raga.parentMelaNumber}`;
  const scale = raga.arohaString; // the ' octave mark reads fine at card size

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: OG_COLORS.night,
          fontFamily: "Eczar",
        }}
      >
        <div style={{ display: "flex", width: 18, background: accent }} />
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            padding: "0 70px",
            gap: 50,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, color: OG_COLORS.zari }}>
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                fontSize: raga.displayName.length > 14 ? 72 : 96,
                lineHeight: 1.05,
                color: OG_COLORS.ivory,
              }}
            >
              {raga.displayName}
            </div>
            {raga.displayName !== raga.name && (
              <div style={{ display: "flex", marginTop: 10, fontSize: 28, color: OG_COLORS.ivoryMut }}>
                formally {raga.name}
              </div>
            )}
            <div style={{ display: "flex", marginTop: 34, fontSize: 34, color: OG_COLORS.ivoryMut }}>
              {scale}
            </div>
            <div style={{ display: "flex", marginTop: 44, fontSize: 26, color: OG_COLORS.ivory }}>
              raaga<span style={{ color: OG_COLORS.zariHi }}>wheel</span>
            </div>
          </div>
          <OgSeal
            semitones={raga.swarasUsed.map((s) => SEMITONE[s])}
            anyaSemitones={
              raga.kind === "janya" ? raga.anyaSwaras.map((s) => SEMITONE[s]) : []
            }
            color={accent}
            size={330}
          />
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: [await eczarFont()] },
  );
}
