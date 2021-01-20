import {useContext} from 'react';
import BackLinkProvider, {BackLinkContext} from './BackLinkProvider';

function useBackLink({up} = {}) {
	const {backLink, backUpLink} = useContext(BackLinkContext);
	return up ? backUpLink : backLink;
}

export {BackLinkProvider, BackLinkContext};

export default useBackLink;
