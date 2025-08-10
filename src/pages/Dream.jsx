import { useState, useEffect } from "react";
import { useGetDreamsQuery } from "./../entities/dreams";
import { DreamsList } from "./../widgets/DreamsListWidget/DreamsList";
import { Link } from "react-router";
import { AddDreamButton } from "../features/dream/add-dream";

function Dream() {
  const [page, setPage] = useState(1);
  const [cursors, setCursors] = useState([]);
  const perPage = 5;

  const { data, isLoading } = useGetDreamsQuery({
    page,
    perPage,
    cursors,
  });

const dreams = data?.dreams || [];
  console.log(dreams);
const hasMore = data?.hasMore;

  useEffect(() => {
    if (data?.cursor && cursors.length < page) {
      setCursors((prev) => [...prev, data.cursor]);
    }
    if (dreams.length === 0 && page > 1) {
      setPage((p) => p - 1);
    }
  }, [dreams, cursors?.length, page]);

  return (
    <div className="dream">
      <div className="dream__container">
        <Link to={"/"} className="btn dream__btn">
          ◀ На головну
        </Link>
        <div className="dream__header">
          <h1 className="dream__title">Список моїх мрій:</h1>
		  <AddDreamButton/>
        </div>
        <DreamsList
          dreams={dreams}
          page={page}
          setPage={setPage}
          hasMore={hasMore}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Dream;
