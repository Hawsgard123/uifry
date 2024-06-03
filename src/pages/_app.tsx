import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from 'next/font/local'

const clashDisplay = localFont({
  src: './fonts/ClashDisplayRegular.ttf',
  variable: "--font-clashDisplay",
})

export default function App({ Component, pageProps }: AppProps) {
  const customFonts = `
  ${clashDisplay.variable}
  `
  return (
    <>
      <main className={customFonts}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
