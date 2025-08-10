
import { useAddDream } from "./../../features/dream/add-dream"
import { DreamForm, useDreamForm } from "../../features/dream/form-dream"
import { useEditDream } from "../../features/dream/edit-dream";



export const DreamEditFormWidget = ({ dreamId }) => {
  const isNew = !dreamId

  const {
    description: editDescription,
    setDescription: setEditDescription,
    friend: editFriend,
    setFriend: setEditFriend,
    year: editYear,
    setYear: setEditYear,
    isLoadingDream,
    isUpdating,
    editDream,
  } = useEditDream(dreamId);

 
  const {
    description: addDescription,
    setDescription: setAddDescription,
    friend: addFriend,
    setFriend: setAddFriend,
    year: addYear,
    setYear: setAddYear,
  } = useDreamForm(); 

  const { addDream, isLoading: isAdding } = useAddDream();

 
  const currentDescription = isNew ? addDescription : editDescription;
  const currentSetDescription = isNew ? setAddDescription : setEditDescription;
  const currentFriend = isNew ? addFriend : editFriend;
  const currentSetFriend = isNew ? setAddFriend : setEditFriend;
   const currentYear = isNew ? addYear : editYear;
   const currentSetYear = isNew ? setAddYear : setEditYear;
  const currentIsLoading = isNew ? isAdding : isUpdating || isLoadingDream

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isNew) {
      await addDream({
        description: currentDescription,
        friend: currentFriend,
        year: currentYear,
      });
    } else {
      await editDream()
    }
  }


  if (!isNew && isLoadingDream) {
    return (
      <div className="wrapper-loader">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <DreamForm
      isNew={isNew}
      description={currentDescription}
      onDescriptionChange={(e) =>
        currentSetDescription(e.target.value.toLowerCase())
      }
      friend={currentFriend}
      onFriendChange={(e) => currentSetFriend(e.target.value.toLowerCase())}
      year={currentYear}
      onYearChange={(e) => currentSetYear(e.target.value)}
      onSubmit={handleSubmit}
      isSubmitting={currentIsLoading}
    />
  );
}
