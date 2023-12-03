import StreamingCard from '../Components/StreamingCard';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Streaming = () => {
  const [streamingInfo, setStreamingInfo] = useState([]);

  useEffect(() => {
    const dataRequest = async () => {
      try {
        const response = await axios.get('http://localhost:43223/scrap');
        setStreamingInfo(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    dataRequest();
  }, []);

  return (
    <div className='w-full flex justify-center items-center flex-wrap gap-5'>
      {streamingInfo.map((streaming) => (
        <StreamingCard key={streaming.serviceName} streamingInfo={streaming} />
      ))}
    </div>
  );
};

export default Streaming;
