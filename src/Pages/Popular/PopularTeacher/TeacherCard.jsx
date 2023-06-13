const TeacherCard = ({ teacher }) => {
  return (
    <div>
      <div className="card card-side bg-base-100  shadow-xl">
        <figure className="h-48">
          <img
            src={teacher?.image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{teacher?.name}</h2>
          <p>{teacher?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
