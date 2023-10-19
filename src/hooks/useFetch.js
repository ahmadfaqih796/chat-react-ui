import React from 'react';
import client from '../feathers';

const useFetch = (service, query = {}) => {
  const dataService = client.service(service);
  const [response, setResponse] = React.useState([]);
  React.useEffect(() => {
    Promise.all([
      dataService.find({
        query: query,
      }),
    ]).then(([messagePage]) => {
      const messagesResult = messagePage.data.reverse();
      setResponse(messagesResult);
    });
    dataService.on('created', message =>
      setResponse(currentMessages => currentMessages.concat(message))
    );
  }, []);
  return {
    response,
  };
};

export default useFetch;
