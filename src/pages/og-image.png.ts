import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";

export const GET = async () => {
  const fontRegular = await fs.readFile("./public/fonts/Inter-Regular.woff");
  const fontBold = await fs.readFile("./public/fonts/Inter-Bold.woff");

  const imageBuffer = await fs.readFile("./public/houssem.png");

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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          padding: "0 60px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              },
              children: [
                {
                  type: "img",
                  props: {
                    src: imageBase64,
                    width: 400,
                    height: 500,
                    style: {
                      objectFit: "contain",
                      marginRight: "60px",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                      flex: 1,
                    },
                    children: [
                      {
                        type: "h1",
                        props: {
                          children: "Houssem Balti",
                          style: {
                            fontSize: "80px",
                            fontWeight: "bold",
                            margin: "0 0 10px 0",
                          },
                        },
                      },
                      {
                        type: "p",
                        props: {
                          children: "Full-stack Developer",
                          style: {
                            fontSize: "40px",
                            color: "#a1a1aa",
                            margin: 0,
                          },
                        },
                      },
                    ],
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
    },
  });
};
