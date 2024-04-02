import { FunctionComponent, ReactNode } from 'react';
import styles from './Container.module.css';

type Props = {
	children: ReactNode;
};

const Container: FunctionComponent<Props> = ({ children }): ReactNode => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
