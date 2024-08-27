import theme, {roboto} from "@/theme";
import {Html, Head, Main, NextScript, DocumentProps, DocumentContext} from "next/document";
import {
	DocumentHeadTagsProps,
	DocumentHeadTags,
	documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
	return (
		<Html lang="es" className={roboto.className}>
			<Head>
				<meta name="theme-color" content={theme.palette.primary.main} />
				<meta name="emotion-insertion-point" content="" />
				<DocumentHeadTags {...props} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

Document.getInitialProps = async (ctx: DocumentContext) => {
	const finalProps = await documentGetInitialProps(ctx);
	return finalProps;
};
