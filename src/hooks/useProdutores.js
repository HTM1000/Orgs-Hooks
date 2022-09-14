import {useState, useEffect} from 'react';

import {loadProducers} from '../services/loadData';

export default function useProdutores() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const retornar = loadProducers();
    retornar.list.sort(
      (produtor1, produtor2) => produtor1.distance - produtor2.distance,
    );
    setTitle(retornar.title);
    setList(retornar.list);
  }, []);

  return [title, list];
}
