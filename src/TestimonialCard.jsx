import { Star } from "lucide-react";

export default function TestimonialCard() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full mx-auto">

        <div className="flex gap-1 mb-6">
          <Star className="w-5 h-5 fill-indigo-600 text-indigo-600" />
          <Star className="w-5 h-5 fill-indigo-600 text-indigo-600" />
          <Star className="w-5 h-5 fill-indigo-600 text-indigo-600" />
          <Star className="w-5 h-5 fill-indigo-600 text-indigo-600" />
          <Star className="w-5 h-5 fill-indigo-600 text-indigo-600" />
        </div>

        <p className="text-2xl font-semibold text-gray-900 leading-snug mb-8">
          "Qui dolor enim consectetur do et non ex amet culpa sint in ea
          non dolore. Enim minim magna anim id minim eu cillum sunt
          dolore aliquip. Amet elit laborum culpa irure incididunt
          adipisicing culpa amet officia exercitation. Eu non aute velit id
          velit Lorem elit anim pariatur."
        </p>

        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
              alt="Judith Black"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Judith Black</p>
            <p className="text-gray-500 text-sm">CEO of Workcation</p>
          </div>
        </div>

      </div>
    </div>
  );
}