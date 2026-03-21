import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";

export const prerender = true;

// Colors for the OG image. These are intentionally OG-specific values optimized
// for contrast at small preview sizes — they intentionally diverge from global.css.
const colors = {
  surface: "#070d1f",
  surfaceContainerLow: "#09122b",
  onSurface: "#dfe4ff",         // brighter than --foreground for OG legibility
  onSurfaceVariant: "#96a9e6",  // brighter than --muted-foreground for OG legibility
  // base: #c4c7c9 — used at 0.4 and 0.3 alpha below
  primarySubtle: "rgba(196, 199, 201, 0.4)",
  brandLabel: "rgba(196, 199, 201, 0.3)",
};

export const GET = async () => {
  const fontRegular = await fs.readFile("./public/fonts/Inter-Regular.woff");
  const fontBold = await fs.readFile("./public/fonts/Inter-Bold.woff");

  const imageBuffer = await fs.readFile("./public/houssem-pixel.png");
  const imageBase64 = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  const svg = await satori(
    // @ts-ignore
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${colors.surface}, ${colors.surfaceContainerLow}, ${colors.surface})`,
          fontFamily: "Inter",
          position: "relative",
        },
        children: [
          // Portrait image
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                marginBottom: "48px",
              },
              children: [
                {
                  type: "img",
                  props: {
                    src: imageBase64,
                    width: 160,
                    height: 160,
                    style: {
                      objectFit: "contain",
                      objectPosition: "top",
                      borderRadius: "12px",
                    },
                  },
                },
              ],
            },
          },
          // Identity block
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
              },
              children: [
                // Name
                {
                  type: "h1",
                  props: {
                    children: "Houssem Balti",
                    style: {
                      fontSize: "104px",
                      fontWeight: 700,
                      letterSpacing: "-4px",
                      color: colors.onSurface,
                      margin: 0,
                      lineHeight: 1,
                    },
                  },
                },
                // Divider row with subtitle
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "24px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "64px",
                            height: "2px",
                            backgroundColor: colors.primarySubtle,
                          },
                        },
                      },
                      {
                        type: "p",
                        props: {
                          children: "Full Stack Developer",
                          style: {
                            fontSize: "24px",
                            fontWeight: 400,
                            color: colors.onSurfaceVariant,
                            letterSpacing: "0.5px",
                            margin: 0,
                          },
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "64px",
                            height: "2px",
                            backgroundColor: colors.primarySubtle,
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // Brand link (absolute bottom center)
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "48px",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
              },
              children: [
                {
                  type: "span",
                  props: {
                    children: "houssembalti.dev",
                    style: {
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "0.4em",
                      textTransform: "uppercase",
                      color: colors.brandLabel,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
