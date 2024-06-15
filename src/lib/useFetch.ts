import { useState, useEffect } from 'react';
import { DataResult } from "@/lib/types";

export default function useFetch(serverFunction: () => Promise<DataResult>): DataResult {
  const [fetchedData, setFetchedData] = useState<DataResult>({
    data: Array.from({ length: 3 }, () => ({
      id: null,
      name: null,
      type: null,
      github: null,
      url: null,
      description: null,
      imagePreviewUrl: null,
      screenshots: null,
      techStack: null,
    })),
    isError: false,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
        const data = await serverFunction();
        setFetchedData(data);
    };
    fetchData()
    return () => {}
  }, []);

  return fetchedData;
}
