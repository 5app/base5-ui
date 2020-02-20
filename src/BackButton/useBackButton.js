import {useContext} from 'react';
import {BackButtonContext} from './BackButtonProvider';

function useBackButton() {
	return useContext(BackButtonContext);
}

export default useBackButton;
