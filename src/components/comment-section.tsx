import { Button } from "./ui/button";

interface Comment {
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
}

const comments: Comment[] = [
  {
    author: "Alfredo Torres",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhp1nY6bRT1YJ1TJ1UgSG-3aOFBpgMMqyR23AHpeGWRaxlV1MErA0LTx0hz98KHXadJk&usqp=CAU",
    content: "Lorem ipsum dolor sit amet, consectetur?",
    timestamp: "1 Minute Ago",
  },
  {
    author: "Alfredo Torres",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhp1nY6bRT1YJ1TJ1UgSG-3aOFBpgMMqyR23AHpeGWRaxlV1MErA0LTx0hz98KHXadJk&usqp=CAU",
    content: "Lorem ipsum dolor sit amet, consectetur?",
    timestamp: "1 Minute Ago",
  },
];

export function CommentsSection() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Comment & Message</h2>
        <Button>
          See All
        </Button>
      </div>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white p-4 rounded-lg border"
          >
            <img
              src={comment.avatar}
              alt={comment.author}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-medium">{comment.author}</h3>
              <p className="text-gray-600 mt-1">{comment.content}</p>
              <span className="text-sm text-gray-400">{comment.timestamp}</span>
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Reply
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
