import Container from '@mui/material/Container'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	)
}

export default MyApp
