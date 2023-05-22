import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return <div onClick={handleClick}>{children}</div>;
}

export default Link;
