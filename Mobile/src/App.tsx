import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SignIn } from './screens/SignIn';


export default function App() {
	return (
		<>
			<NativeBaseProvider>
				<SignIn />
			</NativeBaseProvider>
		</>
	);
}
