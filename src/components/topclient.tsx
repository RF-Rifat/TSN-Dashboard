import { Button } from "./ui/button";

interface Client {
  name: string;
  image: string;
}

const clients: Client[] = [
  {
    name: "Alfredo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhp1nY6bRT1YJ1TJ1UgSG-3aOFBpgMMqyR23AHpeGWRaxlV1MErA0LTx0hz98KHXadJk&usqp=CAU",
  },
  {
    name: "Claudia",
    image:
      "https://transmedic.co.id:7772/images/profile/user-uploads/user-13.jpg",
  },
  {
    name: "Cahaya",
    image:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=w8SlKv-4u6xYyU07CXeBRvfW6F0iYx-a7HR2ChM8ZbU=",
  },
  {
    name: "Mariana",
    image:
      "https://st3.depositphotos.com/16122460/19264/i/450/depositphotos_192649986-stock-photo-charming-young-man-on-grey.jpg",
  },
  {
    name: "Olivia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM2Hw1L7WfNlw-LKKG5rMVzOnpdzgW_HyyFa5SFwZ_Y5Y2VIM4EXvs6JHz-SpEG8IXb0&usqp=CAU",
  },
];

export function TopClients() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Top Client</h2>
        <Button>
          See All
        </Button>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
        {clients.map((client) => (
          <div key={client.name} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5">
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
