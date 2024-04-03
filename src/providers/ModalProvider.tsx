import { FunctionComponent, ReactNode, createContext, useCallback, useState } from 'react';

type Props = {
	children: ReactNode;
};
type Context = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	handleChangeVisibility: () => void
};

export const ModalContext = createContext<Context>({} as Context);

const ModalProvider: FunctionComponent<Props> = ({ children }): ReactNode => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const handleChangeVisibility = useCallback(() => setIsVisible(prev => !prev), [])
	return (
		<ModalContext.Provider value={{ isVisible, setIsVisible, handleChangeVisibility }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
