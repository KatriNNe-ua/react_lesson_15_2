import { useState, useEffect } from 'react'

export const useDreamForm = (
  initialDescription = "",
  initialFriend = "",
  initialYear = ""
) => {
  const [description, setDescription] = useState(initialDescription);
  const [friend, setFriend] = useState(initialFriend);
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    setDescription(initialDescription);
    setFriend(initialFriend);
	 setYear(initialYear);
  }, [initialDescription, initialFriend, initialYear]); 

  return {
    description,
    setDescription,
    friend,
    setFriend,
    year,
    setYear,
  };
};
