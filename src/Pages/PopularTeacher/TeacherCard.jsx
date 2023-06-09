const TeacherCard = ({ teacher }) => {
  return (
    <div>
      <div className="card card-side bg-base-100  shadow-xl">
        <figure className="h-48">
          <img
            src={teacher?.photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{teacher?.name}</h2>
          <p>{teacher?.email}</p>
          <p className="font-semibold">Classes Taken: {teacher?.classesTaken}</p>
          
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
