import "@/styles/globals.css"; 
// Importa los estilos globales de la aplicación. Estos se aplican a todas las páginas.

import theme from "@/theme"; 
// Importa el tema personalizado de MUI que define los colores, tipografía, y demás configuraciones de diseño.

import { ThemeProvider } from "@emotion/react"; 
// Importa el proveedor de temas de Emotion, que permite aplicar el tema de MUI en toda la aplicación.

import { CssBaseline } from "@mui/material"; 
// Importa CssBaseline de MUI, que se encarga de normalizar los estilos CSS predeterminados para asegurar consistencia en todos los navegadores.

import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter"; 
// Importa AppCacheProvider, que maneja el cache y el estado de la aplicación de manera eficiente cuando se usa MUI con Next.js.

import type { AppProps } from "next/app"; 
// Importa el tipo AppProps, que define las propiedades del componente App en Next.js.

import Head from "next/head"; 
// Importa el componente Head de Next.js para manejar las etiquetas meta y el título de la página.

export default function App(props: AppProps) {
  const { Component, pageProps } = props; 
  // Desestructura las propiedades para obtener el componente de la página actual y sus props.

  return (
    <AppCacheProvider {...props}>
      {/* AppCacheProvider envuelve la aplicación, optimizando el manejo de cache y estado de los componentes de MUI. */}
      
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" /> 
        {/* Asegura que la aplicación tenga una escala adecuada en dispositivos móviles. */}
      </Head>

      <ThemeProvider theme={theme}>
        {/* Envuelve la aplicación en ThemeProvider para aplicar el tema personalizado de MUI. */}
        
        <CssBaseline /> 
        {/* Resetea los estilos por defecto del navegador y aplica los estilos base de MUI. */}
        
        <Component {...pageProps} /> 
        {/* Renderiza el componente de la página actual con sus props. */}
      </ThemeProvider>
    </AppCacheProvider>
  );
}
