import { useEffect } from 'react';
import { asyncgetusers } from './store/ .jsx';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);


  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);

  return (
    <div>App</div>
  );
}

export default App;