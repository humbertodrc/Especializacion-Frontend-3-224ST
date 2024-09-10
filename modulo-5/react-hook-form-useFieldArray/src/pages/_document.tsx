import theme, { roboto } from "@/theme"; // Importa el tema personalizado de MUI y la fuente Roboto desde el archivo de tema.
import { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from "next/document"; 
// Importa componentes y tipos necesarios de Next.js para crear el documento HTML personalizado.

import {
  documentGetInitialProps, 
  DocumentHeadTags, 
  DocumentHeadTagsProps,
} from "@mui/material-nextjs/v14-pagesRouter"; 
// Importa funciones y componentes específicos para integrar MUI con Next.js usando Page Router.

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="es" className={roboto.className}> 
      {/* Define el idioma del documento HTML como español y aplica la clase de la fuente Roboto. */}
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} /> 
        {/* Establece el color del tema del navegador móvil en el color primario definido en el tema de MUI. */}
        <meta name="emotion-insertion-point" content="" /> 
        {/* Este meta tag es necesario para que la librería de estilos Emotion pueda insertar sus estilos correctamente. */}
        <DocumentHeadTags {...props} /> 
        {/* Renderiza las etiquetas del encabezado necesarias para que MUI funcione correctamente, como los estilos CSS. */}
      </Head>
      <body>
        <Main /> 
        {/* Renderiza la aplicación Next.js */}
        <NextScript /> 
        {/* Incluye los scripts necesarios que Next.js genera automáticamente para que la aplicación funcione correctamente. */}
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx); 
  // Obtiene las props iniciales del documento, necesarias para configurar correctamente MUI con Next.js.
  return finalProps; 
  // Retorna las props finales para ser usadas por el componente Document.
};