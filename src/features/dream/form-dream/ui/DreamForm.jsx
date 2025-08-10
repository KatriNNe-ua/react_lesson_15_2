export const DreamForm = ({
  description,
  onDescriptionChange,
  friend,
  onFriendChange,
  year,
  onYearChange,
  onSubmit, 
  isNew,
  isSubmitting
}) => {
  return (
    <form onSubmit={onSubmit} className="form__block">
        <h1 className="form__title">
          {isNew ? "Моя нова мрія:" : "Редагування мрії"}
        </h1>
        <div className="form__wrapper">
          <div className="form__item">
            <label htmlFor="description">Моя мрія:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={onDescriptionChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form__item">
            <label htmlFor="year">Рік досягнення:</label>
            <input
              type="number"
              min="2025"
              max="2100"
              step="1"
              id="year"
              value={year}
              onChange={onYearChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form__item">
            <label htmlFor="friend">Друг для мрії:</label>
            <input
              type="text"
              id="friend"
              value={friend}
              onChange={onFriendChange}
              disabled={isSubmitting}
            />
          </div>
        </div>


      <button
        type="submit"
        className="btn btn--blue"
        disabled={isSubmitting || description === "" || year===""}
      >
        {isSubmitting ? "Збереження..." : "Зберегти"}
      </button>
    </form>
  );
};
