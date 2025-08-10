import { DreamCard } from "../../entities/dreams/ui/DreamCard";
import { AddDreamButton } from "../../features/dream/add-dream";
import { DeleteDreamButton } from "../../features/dream/delete-dream/ui/DeleteDreamButton";
import { EditDreamLink } from "../../features/dream/edit-dream";
import Pagination from "./ui/Pagination";

export const  DreamsList = ({
  dreams,
  page,
  setPage,
  hasMore,
  isLoading,
}) => {

	return (
    <div className="dream__block">
      <div className="dream__list">
        {isLoading ? (
          <div className="wrapper-loader">
            <div className="loader"></div>
          </div>
        ) : dreams.length === 0 ? (
          <div className="dream__no">Мрії не знайдено</div>
        ) : (
          dreams.map((dream) => (
            <DreamCard
              key={dream.id}
              dream={dream}
              actions={[
                <DeleteDreamButton
                  dreamId={dream.id}
                  key={`delete-${dream.id}`}
                />,
                <EditDreamLink dreamId={dream.id} />,
              ]}
            />
          ))
        )}
      </div>
      {isLoading ? null : (
        <Pagination page={page} setPage={setPage} hasMore={hasMore} />
      )}
    </div>
  );
}

