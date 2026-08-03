export default function TestimonialsSection() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full mx-auto border border-gray-100 rounded-2xl shadow-sm p-12">

        <div className="grid grid-cols-2 divide-x divide-gray-200">

          <div className="pr-12 flex flex-col h-full">
            <div className="flex items-center mb-6">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg"
                alt="Tuple"
                className="w-18 h-18"
              />
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-4 flex-1">
              "Amet amet eget scelerisque tellus sit neque faucibus non
              eleifend. Integer eu praesent at a. Ornare arcu gravida
              natoque erat et cursus tortor consequat at. Vulputate gravida
              sociis enim nullam ultricies habitant malesuada lorem ac.
              Tincidunt urna dui pellentesque sagittis."
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Judith Black"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Judith Black</p>
                <p className="text-gray-500 text-sm">CEO of Tuple</p>
              </div>
            </div>
          </div>

          <div className="pl-12 flex flex-col h-full">
            <div className="flex items-center gap-1 mb-6">
              <span className="bg-gray-900 text-white text-lg font-bold px-1.5 rounded">Re</span>
              <span className="text-lg font-bold text-gray-900">form</span>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-1">
              "Excepteur veniam labore ullamco eiusmod. Pariatur
              consequat proident duis dolore nulla veniam reprehenderit nisi
              officia voluptate incididunt exercitation exercitation elit.
              Nostrud veniam sint dolor nisi ullamco."
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Joseph Rodriguez"
                  className="w-10 h-10 rounded-full object-cover"
                />
               
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Joseph Rodriguez</p>
                <p className="text-gray-500 text-sm">CEO of Reform</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}