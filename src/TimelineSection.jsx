export default function TimelineSection() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full mx-auto border border-gray-100 rounded-2xl shadow-sm p-10">

        <div className="grid grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              <span className="text-indigo-600 text-sm font-medium">Aug 2021</span>
              <span className="flex-1 h-px bg-gray-200"></span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Founded company</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur
              asperiores et dolorem dolorem optio voluptate repudiandae.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              <span className="text-indigo-600 text-sm font-medium">Dec 2021</span>
              <span className="flex-1 h-px bg-gray-200"></span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Secured $65m in funding</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Provident quia ut esse. Vero vel eos repudiandae aspernatur.
              Cumque minima impedit sapiente a architecto nihil.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              <span className="text-indigo-600 text-sm font-medium">Feb 2022</span>
              <span className="flex-1 h-px bg-gray-200"></span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Released beta</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sunt perspiciatis incidunt. Non necessitatibus aliquid.
              Consequatur ut officiis earum eum quia facilis. Hic deleniti
              dolorem quia et.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              <span className="text-indigo-600 text-sm font-medium">Dec 2022</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Global launch of product</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde
              id architecto voluptatem hic aut pariatur velit.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}