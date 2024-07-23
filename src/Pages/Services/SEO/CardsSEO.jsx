import React from "react";
import { Link } from "react-router-dom";

const CardsSEO = () => {
  return (
    <div className="p-9 m-9 border-2 border-gray-600 rounded-md">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2021/12/30/19/46/audit-6904474_640.png"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4 ">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Site Audit
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Site audit is a full analysis of all the factors that affect a
                website's ranking in search engines.
              </p>
              <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  to={"/form"}
                >
                  Get a Free Qoute
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U0VPfGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  On Page SEO
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                On-page SEO also known as On-site SEO is the process of
                optimized the webpages and their content for search engines and
                users.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://plus.unsplash.com/premium_photo-1683578888262-22a112723a83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Off Page SEO
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Off-page SEO is also called off-site SEO. Off-page SEO are the
                efforts to improve a website’s ranking on Search Engines{" "}
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1686061594183-8c864f508b00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U0VPfGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Technical SEO
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                The main focus in Technical SEO is to secure the Website or
                speed up the website.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=1024x1024&w=is&k=20&c=VpSNiVam6Fw3egrJYnP28mEEAXyCjFRjqV_k4PK5S04="
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Advance SEO
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Advanced SEO is the type of SEO in which the main aim is to rank
                the website on top of Search Engine ranking.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2015/11/02/14/01/seo-1018442_1280.png"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Google Business Profile(GBP)
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Google Business Profile(GBP) is the tool by Google to help you
                to show your Presence on Google.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2016/03/29/18/37/seo-1288976_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Local SEO
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Local SEO is the branch of SEO in which the main focus is to
                rank the website in Local Search.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1924137135/photo/online-blog-search-learning-work-internet-freelance-business-post-website-online-homepage.webp?b=1&s=612x612&w=0&k=20&c=beH6n3DIZxBBEPNObxA6FeGzJyBIwfHG2Pt5Swp7ZSY="
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Blogs
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Blog is the online Platform/Website in which Individuals or
                group of Individual post about different topics regularly.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2016/06/19/08/43/marketing-1466315_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Content Writing
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Content writing is the process of writing and publishing the
                content for different purposes like Blog-Post, marketing and
                Description about Products etc.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1440535142/photo/computer-keyboard-and-night-with-business-hands-typing-for-online-market-research-website.jpg?s=1024x1024&w=is&k=20&c=ti-t1sTHeGhvL7mfaqsLsbARW2APsL-EgrsGW0Ys36U="
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Copypwriting
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Copywriting is like as Content Writing but its main focus is for
                Marketing or Advertising purpose.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2014/12/08/09/20/monitor-560634_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  PPC Ads
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Pay-Per-Click (PPC) is the marketing technique to advertise your
                Brand on different Platforms you pay when someone click on your
                Ads and come to your website.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2015/06/01/09/00/seo-793032_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  SEM
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Search Engine Marketing(SEM) is a technique to increase the
                traffic on your Website. It relate to SEO but its main purpose
                is to increase your traffic.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CardsSEO;
