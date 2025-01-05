"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-10 sm:pb-15 md:pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto w-full md:w-1/2 aspect-[588/526.5]"
            >
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src="/images/about/main-1.jpg"
                  alt="About"
                  className="dark:hidden object-cover rounded-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 588px"
                  priority
                />
                <Image
                  src="/images/about/main-1.jpg"
                  alt="About"
                  className="hidden dark:block object-cover rounded-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 588px"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Solusi tepat untuk kebutuhan
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Konstruksi dan Desain
                </span>
              </h2>
              <p>
                Tim kami siap untuk bekerja di berbagai lokasi dan lingkup proyek yang Anda butuhkan.
              </p>

              
              
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Pengalaman Lebih dari {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  10 Tahun
                </span>
              </h2>
              <p className="text-justify">
              Selama lebih dari satu dekade, kami telah membangun reputasi yang kuat dalam industri konstruksi dan desain ornamen GRC, dengan pengalaman luas dalam berbagai jenis proyek dari rumah tinggal hingga gedung komersial besar. Keahlian kami meliputi pengadaan dan pemasangan ornamen GRC, kustomisasi bentuk dan desain sesuai keinginan klien, serta layanan ukir, potong, dan grafir untuk berbagai material. Dengan pengalaman ini, kami menawarkan solusi inovatif dan efisien untuk setiap proyek, memastikan hasil akhir yang memuaskan dan sesuai dengan visi arsitektur Anda.
              </p>
              
              <div>
                
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src="/images/about/main-2.jpg"
                  alt="About"
                  className="dark:hidden object-cover rounded-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 588px"
                  priority
                />
                <Image
                  src="/images/about/main-2.jpg"
                  alt="About"
                  className="hidden dark:block object-cover rounded-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 588px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
