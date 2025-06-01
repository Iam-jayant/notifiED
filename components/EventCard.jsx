const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-bold">{event.name}</h3>
      <p className="text-sm text-gray-500">{event.date}</p>
      <p className="text-sm">{event.type}</p>
      <a
        href={`/events/${event.id}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Details
      </a>
    </div>
  );
};

export default EventCard;