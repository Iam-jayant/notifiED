import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import EventCard from "../components/EventCard";
import Filters from "../components/Filters";

const HomePage = () => {
  const events = [
    { id: 1, name: "Hackathon 2025", date: "Aug 25, 2025", type: "Hackathon" },
    { id: 2, name: "Cultural Fest", date: "Sep 10, 2025", type: "Cultural" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Carousel />
        <Filters />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;