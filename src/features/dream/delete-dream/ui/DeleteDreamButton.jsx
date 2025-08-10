import { useDeleteDream } from "../model/useDeleteDream";

export const  DeleteDreamButton = ({dreamId, onDeleted})=>{
	  const { handleDeleteDream, isLoading } = useDeleteDream();

	   const handleClick = async () => {
    
       const success = await handleDeleteDream(dreamId);
       if (success && onDeleted) {
         onDeleted(dreamId);
       }
     };

	return (
    <button className="btn btn--red" disabled={isLoading} onClick={handleClick}>
      {isLoading ? "Видалення..." : "Видалити"}
    </button>
  );
}