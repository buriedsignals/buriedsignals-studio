// Styles
import '@/styles/globals.css'
// Next
import Head from 'next/head'
// Nodes
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"
// Hooks
import useTheme from '@/hooks/useTheme';
import useScroll from '@/hooks/useScroll';
// Layouts
import Layout from '@/components/layouts';

// Metas
const title = 'Nuanced'
const url = 'https://www.nuanced.studio/'
const description = "A film and interactive design studio specializing in information visualization."
const keywords = 'dataviz, information, design, visualisation, narrative, interactive, visual, journalism, awards, resources, insights, courses, community, data'
const author = 'Nuanced'
const image = url + 'images/img-meta.jpg'

function App({ Component, pageProps }) {
  // Nodes
  const breakpoints = createTheme({
    sm: "400px",
    sm: "700px",
    md: "955px",
    lg: "1175px",
    xl: "1440px",
  });
  // Hooks
  useTheme()
  useScroll()
  return (
    <>      
      <Head>
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={ author } />
        <meta name='designer' content={ author } />
        <meta name='publisher' content={ author } />
        <title key='title'>{ title }</title>
        <meta key='description' name='description' content={ description } />
        <meta name='keywords' content={ keywords } />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        <meta key='og-title' property='og:title' content={ title } />
        <meta property='og:type' content='site' />
        <meta property='og:url' content={ url } />
        <meta key='og-image' property='og:image' content={ image } />
        <meta property='og:site_name' content={ title } />
        <meta key='og-description' property='og:description' content={ description } />
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0, user-scalable=no' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@buriedsignals' />
        <meta key='tw-title' name='twitter:title' content={ title } />
        <meta key='tw-description' name='twitter:description' content={ description } />
        <meta name='twitter:creator' content='@buriedsignals' />
        <meta key='tw-image' name='twitter:image:src' content={ image } />
      </Head>
      <ThemeProvider theme={ breakpoints }>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
