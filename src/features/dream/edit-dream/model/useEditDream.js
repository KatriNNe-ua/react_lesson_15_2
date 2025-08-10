import { useNavigate } from "react-router";
import {
  useGetDreamByIdQuery,
  useUpdateDreamMutation,
} from "../../../../entities/dreams";
import { useDreamForm } from "../../form-dream/model/useDreamForm";

export const useEditDream = (dreamId) => {
  const navigate = useNavigate();

  const {
    data: dreamData,
    isLoading: isLoadingDream,
    error: loadError,
  } = useGetDreamByIdQuery(dreamId);
  const [updateDreamMutation, { isLoading: isUpdating, error: updateError }] =
    useUpdateDreamMutation();

  const { description, setDescription, friend, setFriend, year, setYear } =
    useDreamForm(
      dreamData?.description || "",
      dreamData?.friend || "",
      dreamData?.year || ""
    );

  const editDream = async () => {
    try {
      await updateDreamMutation({
        id: dreamId,
        data: { description, friend, year },
      }).unwrap();
      navigate("/dreams");
      return true;
    } catch (e) {
      console.error("Failed to update dream:", e);
      return false;
    }
  };

  return {
    description,
    setDescription,
    friend,
    setFriend,
    year,
    setYear,
    isLoadingDream,
    loadError,
    isUpdating,
    updateError,
    editDream,
  };
};
