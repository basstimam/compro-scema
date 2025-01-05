"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-10 lg:py-15">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {/* Logo & Contact */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <div className="flex items-center">
                  <Image
                    src="/images/logo/logo-light.svg"
                    alt="Logo"
                    width={110}
                    height={80}
                    className="dark:hidden"
                  />
                  <Image
                    src="/images/logo/logo-dark.svg"
                    alt="Logo"
                    width={110}
                    height={80}
                    className="hidden dark:block"
                  />
                  <span className="ml-3 text-2xl font-bold">Solid</span>
                </div>
                <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  CONTACT
                </h3>
                <a
                  href="mailto:hello@solid.com"
                  className="mt-2 block text-lg font-medium text-gray-900 dark:text-white hover:text-primary"
                >
                  hello@solid.com
                </a>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h3 className="mb-6 text-xl font-medium text-black dark:text-white">
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-primary dark:text-gray-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/product" className="text-gray-600 hover:text-primary dark:text-gray-400">
                      Product
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-gray-600 hover:text-primary dark:text-gray-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="text-gray-600 hover:text-primary dark:text-gray-400">
                      Pricing
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h3 className="mb-6 text-xl font-medium text-black dark:text-white">
                  Support
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a href="/company" className="text-gray-600 hover:text-primary dark:text-gray-400">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="/press-media" className="text-gray-600 hover:text-primary dark:text-gray-400">
                      Press media
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-gray-600 hover:text-primary dark:text-gray-400">
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h3 className="mb-6 text-xl font-medium text-black dark:text-white">
                  Newsletter
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Subscribe to receive future updates
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-lg border border-stroke bg-transparent px-6 py-3 text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-dark-6"
                  />
                  <button
                    type="submit"
                    className="ml-4 flex h-[52px] w-[52px] items-center justify-center rounded-lg bg-primary text-white hover:bg-opacity-90"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.125 10H16.875"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 4.375L16.875 10L11.25 15.625"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
